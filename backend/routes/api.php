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
