<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 17-9-2018
 * Time: 13:52
 */

namespace App\ContentProviders;
use Illuminate\Support\Collection;


/**
 * Interface ContentProvider
 * This interface contains the methods that each content provider should implement
 * @package App\ContentProviders
 */
interface ContentProvider
{

    /**
     * Obtain a number of collections, from a given long-latitude
     * @param float $longitude
     * @param float $latitude
     * @param int $radius
     * @return array
     */
    public function getVenuesByLongLatitude(float $longitude, float $latitude, int $radius): array ;

    /**
     * Will return whether the API is available
     * @return bool True for online, False for offline
     */
    public function isAvailable(): bool;
}