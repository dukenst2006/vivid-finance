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

Route::group([
    'name'       => 'invoice',
    'namespace'  => 'Api\V1',
    'prefix'     => 'v1/invoices',
    'middleware' => [
        'jwt.auth'
    ]
], function () {
    Route::get('', [ 'uses' => 'InvoiceController@index' ]);
    Route::get('{invoice}', [ 'uses' => 'InvoiceController@show' ]);
    Route::put('{invoice}', [ 'uses' => 'InvoiceController@update' ]);
    Route::delete('{invoice}', [ 'uses' => 'InvoiceController@destroy' ]);
    Route::post('', [ 'uses' => 'InvoiceController@store' ]);
});

Route::group([
    'name'      => 'auth',
    'namespace' => 'Api\V1',
    'prefix'    => 'v1/auth'
], function () {
    Route::post('', [ 'uses' => 'LoginController@login' ]);
});