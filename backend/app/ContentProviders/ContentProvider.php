<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 17-9-2018
 * Time: 13:52
 */

namespace App\ContentProviders;
use App\Venue;
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

    /**
     * This function will check a certain response, for whether the request succeeded.
     * @param $endpoint string
     * @param $request mixed
     * @return bool
     */
    public function checkResponse($endpoint, $request): bool;

    /**
     * This method, should create an instance of the Venue object, from the data of the API
     * @param $object mixed Data returned by the API
     * @return Venue
     */
    public function createVenueFromAPIListing($object): Venue;

    /**
     * This function, will make the request to the API, and return the result
     * @param String $endpoint The endpoint of the API to make the request to
     * @param String $method POST/GET
     * @param array $parameters All parameters to include to the request
     * @return mixed A PHP object, with the contents of what the API returned
     */
    public function get(String $endpoint, String $method, array $parameters);
}