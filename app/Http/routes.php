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
        'middleware' => [
            'api',
            'jwt.auth'
        ],
        'as'         => 'api::',
        'namespace'  => 'API',
        'prefix'     => 'api/v1'
    ],
    function () {
        // User
        Route::get('users', ['as' => 'user.index', 'uses' => 'UserController@index']);
        Route::post('users', ['as' => 'user.store', 'uses' => 'UserController@store']);
        Route::get('users/{user}', ['as' => 'user.show', 'uses' => 'UserController@show']);
        Route::put('users/{user}', ['as' => 'user.update', 'uses' => 'UserController@update']);
        Route::delete('users/{user}', ['as' => 'user.destroy', 'uses' => 'UserController@destroy']);

        // Customer
        Route::get('customers', ['as' => 'customer.index', 'uses' => 'CustomerController@index']);
        Route::post('customers', ['as' => 'customer.store', 'uses' => 'CustomerController@store']);
        Route::get('customers/{customer}', ['as' => 'customer.show', 'uses' => 'CustomerController@show']);
        Route::put('customers/{customer}', ['as' => 'customer.update', 'uses' => 'CustomerController@update']);
        Route::delete('customers/{customer}', ['as' => 'customer.destroy', 'uses' => 'CustomerController@destroy']);

        // Invoice
        Route::get('invoices', ['as' => 'invoice.index', 'uses' => 'InvoiceController@index']);
        Route::post('invoices', ['as' => 'invoice.store', 'uses' => 'InvoiceController@store']);
        Route::get('invoices/{invoice}', ['as' => 'invoice.show', 'uses' => 'InvoiceController@show']);
        Route::put('invoices/{invoice}', ['as' => 'invoice.update', 'uses' => 'InvoiceController@update']);
        Route::delete('invoices/{invoice}', ['as' => 'invoice.destroy', 'uses' => 'InvoiceController@destroy']);
    }
);

Route::group(
    [
        'middleware' => ['web'],
        'as'         => 'web::'
    ],
    function () {
        Route::get('/', ['as' => 'home.index', 'uses' => 'HomeController@index']);
    }
);