<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/



Route::group(
    [
        'middleware' => ['api'],
        'as'         => 'api::',
        'namespace'  => 'API',
        'prefix'     => 'api/v1'
    ],
    function () {
        // User
        Route::get('user', ['as' => 'user.index', 'uses' => 'UserController@index']);
        Route::post('user', ['as' => 'user.store', 'uses' => 'UserController@store']);
        Route::get('user/{user}', ['as' => 'user.show', 'uses' => 'UserController@show']);
        Route::put('user/{user}', ['as' => 'user.update', 'uses' => 'UserController@update']);
        Route::delete('user/{user}', ['as' => 'user.destroy', 'uses' => 'UserController@destroy']);

        // Customer
        Route::get('customer', ['as' => 'customer.index', 'uses' => 'CustomerController@index']);
        Route::post('customer', ['as' => 'customer.store', 'uses' => 'CustomerController@store']);
        Route::get('customer/{customer}', ['as' => 'customer.show', 'uses' => 'CustomerController@show']);
        Route::put('customer/{customer}', ['as' => 'customer.update', 'uses' => 'CustomerController@update']);
        Route::delete('customer/{customer}', ['as' => 'customer.destroy', 'uses' => 'CustomerController@destroy']);

        // Invoice
        Route::get('invoice', ['as' => 'invoice.index', 'uses' => 'InvoiceController@index']);
        Route::post('invoice', ['as' => 'invoice.store', 'uses' => 'InvoiceController@store']);
        Route::get('invoice/{invoice}', ['as' => 'invoice.show', 'uses' => 'InvoiceController@show']);
        Route::put('invoice/{invoice}', ['as' => 'invoice.update', 'uses' => 'InvoiceController@update']);
        Route::delete('invoice/{invoice}', ['as' => 'invoice.destroy', 'uses' => 'InvoiceController@destroy']);
    }
);

Route::group(['middleware' => ['web']], function () {
    Route::get('/', function () {
        return view('home');
    });
});