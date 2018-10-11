<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 1-10-2018
 * Time: 16:05
 */

namespace App;
use App\ContentProviders\ContentProvider;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Phpml\Clustering\KMeans;
use Phpml\Exception\InvalidArgumentException;

/**
 * Class Scheduler
 * Responsible for distributing a number of activities under days
 * @package App
 */
class Scheduler
{

    /**
     * 1. Use K-Means clustering to group nearby venues together
     * 2. Rebalance, by doing k-means again with 1 extra cluster, and merge the smallest 2 days
     * 3. Keep doing step 2, until finally balanced
     * 4. Return it
     * @param ContentProvider $contentProvider
     * @param $id
     * @param int $number_of_groups
     * @param array $venues array
     * @param bool $array
     * @return array
     */
    public static function algorithm(ContentProvider $contentProvider, $id, int $number_of_groups, $venues, $generate, $array = false)
    {

        if($generate) {
            $samples = self::initializeSamples($venues);
            self::SetTripVenueDays($samples, $id, $number_of_groups);
            self::SetTripVenueOrder($id);
        }
        return self::getDayPlanning($contentProvider, $id, $array);
    }

    /**
     * @param $venues
     * @return array
     */
    private static function initializeSamples($venues): array
    {
        $samples = [];
        foreach ($venues as $venue) {
            // Set the lat/long to an integer number, temporarily
            $venue->setLongitude(intval($venue->getLongitude()*1000000));
            $venue->setLatitude(intval($venue->getLatitude()*1000000));
            $samples[$venue->getId()] = [$venue->getLongitude(), $venue->getLatitude()];
        }
        return $samples;
    }

    /**
     * @param int $number_of_groups
     * @return KMeans
     */
    private static function initializeKMeans(int $number_of_groups): KMeans
    {
        try {
            $kmeans = new KMeans($number_of_groups, KMeans::INIT_KMEANS_PLUS_PLUS);
        } catch (InvalidArgumentException $e) {
            Log::error('Tried to initialize KMeans Algorithm without proper number: ' . $number_of_groups);
        }
        return $kmeans;
    }

    /**
     * Returns true if the day-scheduling is considered balanced, false otheriwse
     * @param $distribution
     * @return bool
     */
    private static function isDistributionBalanced($distribution)
    {
        $totalNumActivities = 0;
        foreach ($distribution as $day)
            $totalNumActivities += count($day);

        // In case there are not many activities, abort
        if($totalNumActivities <= 3)
            return true;

        // 1. Go over each day in the array
        // 2. Keep track of the minimum number of activities on a day
        // 3. Keep track of the maximum number of activities on a day
        // 4. If ratio min / max is less or equal than 0.5, and number of activities > 3, that means unbalanced.
        $min = INF;
        $max = -INF;
        foreach ($distribution as $day) {
            $numberOfActivitiesOnDay = count($day);
            if($numberOfActivitiesOnDay < $min)
                $min = $numberOfActivitiesOnDay;
            if($numberOfActivitiesOnDay > $max)
                $max = $numberOfActivitiesOnDay;
        }
        if($min / $max < 0.5)
            return false;

        return true;
    }

    /**
     * Sort an array based on length of its child array
     * @param $arrays
     * @return array
     */
    static function sort_by_length($arrays) {
        $lengths = array_map('count', $arrays);
        asort($lengths);
        $return = array();
        $i = 0;
        foreach(array_keys($lengths) as $k) {
            $return[$i] = $arrays[$k];
            $i++;
        }
        return $return;
    }

    /**
     * @param int $number_of_groups
     * @param $samples
     * @return array
     */
    private static function getBalancedDistribution(int $number_of_groups, $samples): array
    {
        $extraClusters = 0;
        do {
            $kmeans = self::initializeKMeans($number_of_groups + $extraClusters);
            $distribution = $kmeans->cluster(array_values($samples));

            // Check whether the distribution is balanced
            $isBalanced = self::isDistributionBalanced($distribution);

            // if not balanced, sort it
            if (!$isBalanced && $extraClusters != 0)
                $distribution = self::sort_by_length($distribution);

            // For each extra cluster generated, add it up with the smallest one
            $i = 0;
            while (count($distribution) > $number_of_groups) {
                // Merge the first (smallest)
                $newDay = array_merge($distribution[0], $distribution[$extraClusters]);
                $distribution[$extraClusters] = $newDay;
                array_splice($distribution, 0, 1);
                $i++;
            }

            // Update balanced value again
            $isBalanced = self::isDistributionBalanced($distribution);

            $extraClusters++;
        } while (!$isBalanced);
        return $distribution;
    }

    /**
     * @param $samples
     * @param $id
     * @param int $number_of_groups
     * @return array
     */
    private static function SetTripVenueDays($samples, $id, int $number_of_groups): array
    {
        $distribution = self::getBalancedDistribution($number_of_groups, $samples);

        // Update the day number for each day
        foreach ($distribution as $clusterIndex => $activitiesArray) {
            // For each actual activity
            foreach ($activitiesArray as $activity) {
                $tripvenue = self::getTripVenueFromDictionary($samples, $id, $activity);

                // Update the activity day
                $tripvenue->day_number = $clusterIndex+1;
                $tripvenue->save();
            }
        }

        return $distribution;
    }

    /**
     * @param $samples
     * @param $id
     * @param $activity
     * @return \Illuminate\Database\Eloquent\Model|static
     */
    private static function getTripVenueFromDictionary($samples, $id, $activity)
    {
        // Get the id of the activity
        $sampleKey = array_search($activity, $samples);
        // Get the activity
        $tripvenue = TripVenue::where('trip_id', '=', $id)
            ->where('venue_id', '=', $sampleKey)->firstOrFail();
        return $tripvenue;
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model|static
     */
    private static function SetTripVenueOrder($id)
    {
        // Set order numbers
        $trip = Trip::whereId($id)->firstOrFail(); // Obtain trip
        $i = 0;
        $currday = -1;
        foreach ($trip->venues()->orderBy('day_number')->orderBy('order')->get() as $tripvenue) {
            if($currday != $tripvenue->day_number) {
                $currday = $tripvenue->day_number;
                $i = 1;
            } else {
                $i++;
            }
            $tripvenue->order = $i;
            $tripvenue->save();
        }
        return $trip;
    }

    /**
     * @param ContentProvider $contentProvider
     * @param $id
     * @param $array
     * @return array
     */
    private static function getDayPlanning(ContentProvider $contentProvider, $id, $array): array
    {
        self::SetTripVenueOrder($id);
        // Now, return the day planning
        $trip = Trip::whereId($id)->firstOrFail(); // Obtain trip
        $activities = $trip->venues()->orderBy('day_number')->orderBy('order')->get();
        $planning = [];
        $planning[0]['day'] = "unsorted";
        $planning[0]['items'] = [];
        if ($array) {
            for($i = 1; $i <= $trip->number_of_days; $i++) {
                $planning[$i]['day'] = $i;
                $planning[$i]['items'] = [];
            }
        }
        foreach ($activities as $activity) {
            // if array format
            if ($array) {
                $planning[$activity->day_number]["items"][$activity->order-1] = $contentProvider->getVenueById($activity->venue_id)->getAsSimpleArray();
            } else
                $planning[$activity->day_number][] = $contentProvider->getVenueById($activity->venue_id);
        }
        return $planning;
    }
}
