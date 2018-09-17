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
     * Return venues based on coordinates
     * @param Request $request Web Request
     */
    public function lookUpByCoords(ContentProvider $contentProvider, Request $request) {
        $longitude = $request->input('longitude');
        $latitude = $request->input('latitude');

        // Fetch new venues
        $venues = $contentProvider->getVenuesByLongLatitude($longitude, $latitude);

        // Return them as JSON
    }

}