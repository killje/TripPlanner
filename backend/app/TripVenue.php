<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\TripVenue
 *
 * @property string $trip_uuid
 * @property string $venue_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TripVenue whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TripVenue whereTripUuid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TripVenue whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TripVenue whereVenueId($value)
 * @mixin \Eloquent
 */
class TripVenue extends Model
{

    /**
     * Get the trip that this venue belongs to
     */
    public function trip()
    {
        return $this->belongsTo('App\Trip');
    }

    /**
     * Return the DetailedVenue object
     */
    public function getDetailedVenue(): DetailedVenue
    {
        $contentProvider = resolve('App\ContentProviders\ContentProvider');
        $detailedVenue = $contentProvider->getVenueDetailsById($this->venue_id);
        return $detailedVenue;
    }
}
