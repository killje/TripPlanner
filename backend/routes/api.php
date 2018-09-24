<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/venues/lookupbycoords', 'API\VenuesController@lookUpByCoords')->name('venues.lookupbycoords');
Route::post('/trips/store', 'API\TripController@store')->name('trips.store');
Route::post('/trips/destroy', 'API\TripController@destroy')->name('trips.destroy');
Route::post('/trips/venues/add', 'API\TripController@addVenue')->name('trips.addvenue');
Route::post('/trips/venues/remove', 'API\TripController@removeVenue')->name('trips.removevenue');