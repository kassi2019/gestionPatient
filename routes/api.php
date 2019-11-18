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
Route::get('liste_fonction','fonctionController@index');
Route::post('ajouter_fonction','fonctionController@store');
Route::put('/modifier_fonction/{id}','fonctionController@update');
Route::delete('/supprimer_fonction/{id}','fonctionController@destroy');