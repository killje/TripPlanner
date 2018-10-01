<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 1-10-2018
 * Time: 16:05
 */

namespace App;
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
     * @param int $number_of_groups
     * @param array $venues array
     * 1. Use K-Means clustering to group nearby venues together
     * 2. Rebalance
     */
    public static function algorithm(int $number_of_groups, $venues)
    {
        try {
            $kmeans = new KMeans($number_of_groups, KMeans::INIT_KMEANS_PLUS_PLUS);
        } catch (InvalidArgumentException $e) {
            Log::error('Tried to initialize KMeans Algorithm without proper number: ' . $number_of_groups);
        }
        $samples = [];
        foreach ($venues as $venue) {
            $samples[$venue->getId()] = [intval($venue->getLongitude()*1000000), intval($venue->getLatitude()*1000000)];
        }

        dd($kmeans->cluster(array_values($samples)));

    }
}