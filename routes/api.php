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
    'name'       => 'invoice',
    'namespace'  => 'Api\V1',
    'prefix'     => 'v1/customers',
    'middleware' => [
        'jwt.auth'
    ]
], function () {
    Route::get('', [ 'uses' => 'CustomerController@index' ]);
    Route::get('{customer}', [ 'uses' => 'CustomerController@show' ]);
    Route::put('{customer}', [ 'uses' => 'CustomerController@update' ]);
    Route::delete('{customer}', [ 'uses' => 'CustomerController@destroy' ]);
    Route::post('', [ 'uses' => 'CustomerController@store' ]);
});

Route::group([
    'name'      => 'auth',
    'namespace' => 'Api\V1',
    'prefix'    => 'v1/auth'
], function () {
    Route::post('', [ 'uses' => 'LoginController@login' ]);
});

Route::group([
    'name'      => 'auth',
    'namespace' => 'Api\V1',
    'prefix'    => 'v1/register'
], function () {
    Route::post('', [ 'uses' => 'RegisterController@register' ]);
});