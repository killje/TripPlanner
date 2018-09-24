<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Trip;
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
     * Display the specified resource.
     *
     * @param  \App\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function show(Trip $trip)
    {
        // TODO
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
}