<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 17-9-2018
 * Time: 12:32
 */

namespace App\Http\Controllers\API;

use App\ContentProviders\ContentProvider;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VenuesController extends Controller
{

    /**
     * Return non-detailed venues based on coordinates
     * @param ContentProvider $contentProvider
     * @param Request $request Web Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function lookUpByCoords(ContentProvider $contentProvider, Request $request) {
        $longitude = doubleval($request->input('longitude'));
        $latitude = doubleval($request->input('latitude'));
        $radius = intval($request->input('radius'));

        // Fetch new venues
        $venues = $contentProvider->getVenuesByLongLatitude($longitude, $latitude, $radius);

        // Return them as JSON
        return response()->json($venues);
    }

    /**
     * Return more detailed venue object
     * @param ContentProvider $contentProvider Currect content provider
     * @param Request $request Web Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDetails(ContentProvider $contentProvider, Request $request) {
        $id = $request->input('id');

        $venue = $contentProvider->getVenueById($id);
        return response()->json($venue->getAsSimpleArray());
    }

    /**
     * @param ContentProvider $contentProvider
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFeaturedByLocation(ContentProvider $contentProvider, Request $request)
    {
        $searchQuery = $request->input('query');

        $venues = $contentProvider->getFeaturedVenuesByLocation($searchQuery);

        return response()->json($venues);
    }


}