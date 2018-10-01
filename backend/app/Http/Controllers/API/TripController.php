<?php

namespace App\Http\Controllers\API;

use App\ContentProviders\ContentProvider;
use App\Http\Controllers\Controller;
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
            'uuid' => 'required',
        ]);

        // Delete the item from the database
        try {
            $trip = Trip::whereUuid($validatedData['uuid'])->firstOrFail();
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
            'uuid' => 'required',
            'venue_id' => 'required',
        ]);

        // Find the current trip
        try {
            $trip = Trip::whereUuid($validatedData['uuid'])->firstOrFail();
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'response' => 'No Trip exists for this ID',
            ], 422);
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
            'uuid' => 'required',
            'venue_id' => 'required',
        ]);

        // Delete the venue from the trip
        try {
            $trip = Trip::whereUuid($validatedData['uuid'])->firstOrFail();
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
        $validatedData = $request->validate([
            'uuid' => 'required'
        ]);

        // Find the venues
        try {
            $trip = Trip::whereUuid($validatedData['uuid'])->firstOrFail();
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'response' => 'Could not delete this venue from a certain trip',
            ], 422);
        }

        $venuesJSON = [];
        foreach($trip->venues()->get() as $venue)
        {
            $venue = $contentProvider->getVenueById($venue->venue_id)->getAsSimpleArray();
            array_push($venuesJSON, $venue);
        }

        return response()->json([
            'status' => 'success',
            'data' => [
                'id' => $trip->id,
                'uuid' => $trip->uuid,
                'name' => $trip->name,
                'number_of_days' => $trip->number_of_days,
                'created_by' => $trip->created_by,
                'created_at' => $trip->created_at->toCookieString(),
                'updated_at' => $trip->updated_at->toCookieString(),
                'venues' => $venuesJSON
            ]
        ]);
    }

    /**
     * Input argument: uuid=.... regenerate=0/1
     * @param ContentProvider $contentProvider
     * @param Request $request
     */
    public function getSchedule(ContentProvider $contentProvider, Request $request)
    {
        // Validate input
        $validatedData = $request->validate([
            'uuid' => 'required|exists:trips,uuid',
            'generate' => 'sometimes|required|boolean' // may not be present, but if it is, then it should be validated.
        ]);

        $regenerate = false;
        if(isset($validatedData["generate"])) {
            $generate = $request->input('generate');
        }

        $contentProvider->getSchedule($validatedData['uuid'], $generate);
    }
}
