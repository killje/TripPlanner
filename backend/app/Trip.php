<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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
     */
    public function venues()
    {
        return $this->hasMany('App\TripVenue', 'trip_uuid', 'uuid');
    }
}
