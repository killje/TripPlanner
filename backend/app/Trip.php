<?php

namespace App;

use App\ContentProviders\ContentProvider;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Phpml\Clustering\DBSCAN;
use Phpml\Clustering\KMeans;
use Phpml\Exception\InvalidArgumentException;

/**
 * App\Trip
 *
 * @property int $uuid
 * @property string $name
 * @property int $number_of_days
 * @property string $created_by
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Trip whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Trip whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Trip whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Trip whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Trip whereNumberOfDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Trip whereUpdatedAt($value)
 * @mixin \Eloquent
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Trip whereUuid($value)
 * @property int $id
 */
class Trip extends Model
{
    /**
     * Get all the venues that belong to this trip
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function venues()
    {
        return $this->hasMany('App\TripVenue');
    }

    /**
     * Get Detailed venues
     * @return array
     */
    public function detailedVenues(ContentProvider $contentProvider)
    {
        $detailedVenues = [];
        foreach($this->venues()->get() as $detailedVenue) {
            array_push($detailedVenues, $contentProvider->getVenueById($detailedVenue->venue_id));
        }
        return $detailedVenues;
    }

    /**
     * Re-Generate the schedule based on all venues
     * @param ContentProvider $contentProvider
     * @return array
     */
    public function generateSchedule(ContentProvider $contentProvider, $array)
    {
        return Scheduler::algorithm($contentProvider, $this->id, $this->number_of_days, $this->detailedVenues($contentProvider), $array);
    }
}
