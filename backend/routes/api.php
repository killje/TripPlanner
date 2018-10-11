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
Route::get('/venues/details', 'API\VenuesController@getDetails')->name('venues.details');
Route::get('/venues/featuredbyname', 'API\VenuesController@getFeaturedByLocation')->name('venues.featured');

Route::post('/trips/store', 'API\TripController@store')->name('trips.store');
Route::delete('/trips/destroy', 'API\TripController@destroy')->name('trips.destroy');
Route::post('/trips/venues/add', 'API\TripController@addVenue')->name('trips.addvenue');
Route::delete('/trips/venues/remove', 'API\TripController@removeVenue')->name('trips.removevenue');
Route::get('/trips/show', 'API\TripController@show')->name('trips.show');
Route::get('/trips/schedule', 'API\TripController@getSchedule')->name('trips.schedule');
Route::post('/trips/schedule', 'API\TripController@getSchedule')->name('trips.schedule');
Route::post('/trips/venues/changeorder', 'API\TripController@changeVenueOrder')->name('trips.changevenueorder');