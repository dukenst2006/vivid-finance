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

Route::group(['middleware' => ['web']], function () {
    Route::get('/', function () {
        return view('home');
    });
});

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

        // Company
        Route::get('company', ['as' => 'company.index', 'uses' => 'companyController@index']);
        Route::post('company', ['as' => 'company.store', 'uses' => 'companyController@store']);
        Route::get('company/{company}', ['as' => 'company.show', 'uses' => 'companyController@show']);
        Route::put('company/{company}', ['as' => 'company.update', 'uses' => 'companyController@update']);

        // Invoice
        Route::get('invoice', ['as' => 'invoice.index', 'uses' => 'invoiceController@index']);
        Route::post('invoice', ['as' => 'invoice.store', 'uses' => 'invoiceController@store']);
        Route::get('invoice/{invoice}', ['as' => 'invoice.show', 'uses' => 'invoiceController@show']);
        Route::put('invoice/{invoice}', ['as' => 'invoice.update', 'uses' => 'invoiceController@update']);
    }
);