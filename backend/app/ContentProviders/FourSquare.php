<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 17-9-2018
 * Time: 13:21
 */

namespace App\ContentProviders;
use App\Venue;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;


/**
 * Class FourSquare
 * Fetch information using api.foursquare.com
 * @package App
 */
class FourSquare implements ContentProvider
{

    /**
     * This will make a request to a certain API endpoint, and return the results.
     * @param String $endpoint Which API Endpoint to call, example: "venues/explore"
     * @param String $method GET / POST
     * @param array $parameters Associative array with the arguments
     * @return mixed
     */
    public function get(String $endpoint, String $method, array $parameters)
    {
        // The Requesting URL consists of the base API url, with the endpoint added
        $requestURL = config('services.foursquare.base_url') . $endpoint;

        // Add Client ID, Client Secret and Version number to the parameters
        $parameters["client_id"] = config('services.foursquare.client_id');
        $parameters["client_secret"] = config('services.foursquare.client_secret');
        $parameters["v"] = config('services.foursquare.version');

        // In case GET request, add parameters to URL
        if($method == "GET")
            $requestURL .= "?" . http_build_query($parameters);

        // Initialize cURL
        $cURL = curl_init($requestURL);

        curl_setopt_array($cURL,[
            CURLOPT_POST => ($method == "POST"),
            CURLOPT_RETURNTRANSFER => true,     // return web page
            CURLOPT_HEADER         => false,    // don't return headers
            CURLOPT_FOLLOWLOCATION => true,     // follow redirects
            CURLOPT_MAXREDIRS      => 10,       // stop after 10 redirects

        ]);

        // Execute the cURL
        $result = json_decode(curl_exec($cURL));

        return $result;
    }

    /**
     * Turns a FourSquare object into a generic Venue Object
     * @param $object
     * @return Venue
     */
    public function createVenueFromAPIListing($object): Venue
    {
        $venue = new Venue();
        $venue->setId($object->id);
        $venue->setName($object->name);
        $venue->setAddressHumanReadable($object->location->formattedAddress);
        $venue->setLatitude($object->location->lat);
        $venue->setLongitude($object->location->lng);
        return $venue;
    }

    /**
     * Obtain a number of collections, from a given long-latitude
     * @param float $longitude
     * @param float $latitude
     * @param int $radius
     * @return array
     */
    public function getVenuesByLongLatitude(float $longitude, float $latitude, int $radius): array
    {
        $endpoint = "venues/search";
        $result = $this->get($endpoint, "GET", [
            'll' => $latitude . "," . $longitude,
            'intent' => "browse",
            'radius' => $radius
            ]);

        if($this->checkResponse($endpoint, $result) == false)
            return [];

        // For each venue we obtain, create a venue object
        //dd($result);
        $venues = [];
        foreach ($result->response->venues as $venue) {
            $venue = $this->createVenueFromAPIListing($venue);
            array_push($venues,  $venue->getAsSimpleArray());
        }

        return $venues;
    }

    /**
     * Will return whether the API is available
     * @return bool True for available, False for not available
     */
    public function isAvailable(): bool
    {
        // Make a default request
        $endpoint = "venues/explore";
        $request = $this->get($endpoint, 'GET', ['ll' => '40.7243,-74.0018']);

        return $this->checkResponse($endpoint, $request);

    }

    /**
     * Check if the call to the API was successful.
     * @param $endpoint string The endpoint the API was connected to
     * @param $request mixed The result of $this::get();
     * @return bool whether the api request was successful
     */
    private function checkResponse($endpoint, $request): bool
    {
        // Good Response
        if($request->meta->code == 200) {
            return true;
        }

        // Bad Response
        Log::critical("FourSquare API call to endpoint: " . $endpoint . " failed. Information on line below. \r\n" . $request->meta->errorDetail);
        return false;
    }
}