<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 17-9-2018
 * Time: 13:21
 */

namespace App\ContentProviders;

use App\ContentProviders\FourSquare\VenueFactory;
use App\Trip;
use App\Venue;
use App\VenueCategory;
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
     * @var VenueFactory
     */
    protected $venueFactory;

    /**
     * FourSquare constructor.
     * Initialize factories
     */
    public function __construct()
    {
        $this->venueFactory = new VenueFactory($this);
    }

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
     * @param float $longitude
     * @param float $latitude
     * @param int $radius
     * @return array
     */
    public function getVenuesByLongLatitude(float $longitude, float $latitude, int $radius): array
    {
        return $this->venueFactory->getVenuesByLongLatitude($longitude, $latitude, $radius);
    }

    /**
     * @param string $id
     * @return Venue
     */
    public function getVenueById(string $id): Venue
    {
        return $this->venueFactory->getVenueById($id);
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
    public function checkResponse($endpoint, $request): bool
    {
        // Good Response
        if($request->meta->code == 200) {
            return true;
        }

        // Bad Response
        Log::critical("FourSquare API call to endpoint: " . $endpoint . " failed. Information on line below. \r\n" . $request->meta->errorDetail);
        abort($request->meta->code, $request->meta->errorDetail);
        return false;
    }

    /**
     * Get featured venues by location query
     * @param $query
     * @return array
     */
    public function getFeaturedVenuesByLocation($query): array
    {
        return $this->venueFactory->getFeaturedByLocation($query);
    }

    /**
     * @param $uuid
     * @param $generate
     * @return array
     */
    public function getSchedule($uuid, $generate): array
    {
        $trip = Trip::whereUuid($uuid)->firstOrFail();
        if($generate)
            $trip->generateSchedule($this);

        return [];
    }

}