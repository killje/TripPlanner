<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 17-9-2018
 * Time: 13:21
 */

namespace App\ContentProviders;
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
     * Obtain a number of collections, from a given long-latitude
     * @param float $longitude
     * @param float $latitude
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function getVenuesByLongLatitude(double $longitude, double $latitude): Illuminate\Database\Eloquent\Collection
    {
        // TODO: Implement getVenuesByLongLatitude() method.
        return null;
    }

    /**
     * Will return whether the API is available
     * @return bool True for available, False for not available
     */
    public function isAvailable(): bool
    {
        // Make a default request
        $request = $this->get('venues/explore', 'GET', ['ll' => '40.7243,-74.0018']);

        // Good Response
        if($request->meta->code == 200)
            return true;

        // Bad Response
        Log::critical("FourSquare API is not available. Information on line below. \r\n" . $request->meta->errorDetail);
        return false;

    }
}