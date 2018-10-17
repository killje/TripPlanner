<?php

namespace App\Http\Controllers\API;

use App\ContentProviders\ContentProvider;
use App\Http\Controllers\Controller;
use App\Scheduler;
use App\Trip;
use App\TripVenue;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TripController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // TODO
    }


    /**
     * Store a newly created Trip in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate input
        $validatedData = $request->validate([
            'name' => 'required|max:100',
            'number_of_days' => 'required|numeric|min:1'
        ]);

        $trip = new Trip();
        $trip->uuid = Str::uuid();
        $trip->name = $validatedData['name'];
        $trip->number_of_days = $validatedData['number_of_days'];
        $trip->created_by = $request->ip();
        $trip->save();

        return response()->json([
            'status' => 'success',
            'uuid' => $trip->uuid,
            'secret' => encrypt($trip->uuid)
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function edit(Trip $trip)
    {
        // TODO
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Trip $trip)
    {
        // TODO
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        // validate input
        $validatedData = $request->validate([
            'secret' => 'required',
        ]);

        // Delete the item from the database
        try {
            $uuid = decrypt($validatedData['secret']);
            $trip = Trip::whereUuid($uuid)->firstOrFail();
            $trip->delete();
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'response' => 'No Trip exists for this ID',
            ], 422);
        }

        // Send positive response
        return response()->json([
            'status' => 'success',
        ]);

    }

    /**
     * Add a venue to the trip
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function addVenue(Request $request)
    {
        // Validate input
        $validatedData = $request->validate([
            'secret' => 'required',
            'venue_id' => 'required',
        ]);

        // Find the current trip
        try {
            $uuid = decrypt($validatedData['secret']);
            $trip = Trip::whereUuid($uuid)->firstOrFail();
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'response' => 'No Trip exists for this ID',
            ], 422);
        }

        // abort if it's already added
        if($trip->venues()->where('venue_id', '=', $validatedData['venue_id'])->count() != 0) {
            return response()->json(['status' => 'failed']);
        }

        $venue = new TripVenue();
        $venue->venue_id = $validatedData['venue_id'];
        $trip->venues()->save($venue);

        return response()->json([
            'status' => 'success'
        ]);
    }

    /**
 * Remove a venue from the trip
 *
 * @param \Illuminate\Http\Request $request
 * @return \Illuminate\Http\Response
 */
    public function removeVenue(Request $request)
    {
        // Validate input
        $validatedData = $request->validate([
            'secret' => 'required',
            'venue_id' => 'required',
        ]);

        // Delete the venue from the trip
        try {
            $uuid = decrypt($validatedData['secret']);
            $trip = Trip::whereUuid($uuid)->firstOrFail();
            $venue = $trip->venues()->where('venue_id', '=', $validatedData['venue_id'])->delete();
        } catch (\Exception $e) {
            dd($e);
            return response()->json([
                'status' => 'fail',
                'response' => 'Could not delete this venue from a certain trip',
            ], 422);
        }

        return response()->json([
            'status' => 'success'
        ]);
    }

    /**
     * List detailed information of the trip
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, ContentProvider $contentProvider)
    {
        // Validate input
        if( $request->has('secret') ) {
            $uuid = decrypt($request->input('secret'));
        } else {
            $uuid = $request->input('uuid');
        }

        // Find the venues
        try {
            $trip = Trip::whereUuid($uuid)->firstOrFail();
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'response' => 'Could not delete this venue from a certain trip',
            ], 422);
        }

        $retrunData = [
            'status' => 'success',
            'data' => [
                'id' => $trip->id,
                'uuid' => $trip->uuid,
                'name' => $trip->name,
                'number_of_days' => $trip->number_of_days,
                'created_by' => $trip->created_by,
                'created_at' => $trip->created_at->toCookieString(),
                'updated_at' => $trip->updated_at->toCookieString(),
                'schedule' => $trip->generateSchedule($contentProvider, false, true),
            ]
        ];
        if( $request->has('secret') ) {
            $retrunData['data']['secret'] = encrypt($trip->uuid);
        }
        return response()->json($retrunData);
    }

    /**
     * Input argument: uuid=.... regenerate=0/1
     * @param ContentProvider $contentProvider
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSchedule(ContentProvider $contentProvider, Request $request)
    {
        // Validate input
        $validatedData = $request->validate([
            'secret' => 'required',
            'generate' => 'sometimes|required|boolean' // may not be present, but if it is, then it should be validated.
        ]);

        $generate = false;
        if(isset($validatedData["generate"])) {
            $generate = $request->input('generate');
        }
        $uuid = decrypt($validatedData['secret']);

        return response()->json([
            'schedule' => $contentProvider->getSchedule($uuid, $generate, true)
        ]);
    }

    /**
     * Input arguments: Trip ID, TripVenue ID, New Day Number, New Order Number
     * @param ContentProvider $contentProvider
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function changeVenueOrder(ContentProvider $contentProvider, Request $request)
    {
        $validatedData = $request->validate([
            'secret' => 'required|exists:trips,uuid',
            'tripvenueid' => 'required|exists:trip_venues,venue_id',
            'day_number' => 'required|integer',
            'order_number' => 'required|integer'
        ]);

        $uuid = decrypt($validatedData['secret']);
        $trip = Trip::whereUuid($uuid)->firstOrFail();

        $trip->updateVenueOrder($validatedData['tripvenueid'], $validatedData['day_number'], $validatedData['order_number']);

        return response()->json(['status' => 'success']);
    }

    /**
     * Retrieve a list of featured trips that are in the system
     * @param ContentProvider $contentProvider
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFeaturedTrips(ContentProvider $contentProvider, Request $request)
    {
        $amount = 9;
        $trips = Trip::inRandomOrder()->get();

        $featuredTrips = [];
        $locations_added = [];
        $i = 0;
        foreach($trips as $trip) {
            // Do not add two the same locations twice.
            if(in_array(strtolower($trip->name), $locations_added))
                continue;

            // If it has at least 2 venues
            if($trip->venues()->get()->count() > 2) {
                // Add the trip
                $firstVenue = $trip->venues()->first()->getVenue();
                $featuredTrips['trips'][$i]['uuid'] = $trip->uuid;
                $featuredTrips['trips'][$i]['location'] = $trip->name;
                $featuredTrips['trips'][$i]['image'] = $firstVenue->images[0]->squareURL;

                array_push($locations_added, $trip->name);

                $i++;
            }
            if($i == $amount)
                break;
        }
        $featuredTrips['count'] = $i;

        return response()->json([
            'count' => $i,
            'trips' => $featuredTrips
        ]);
    }
}
