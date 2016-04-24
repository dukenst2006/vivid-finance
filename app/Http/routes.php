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
Route::group([
    'middleware' => [
        'api',
        'auth'
    ],
    'as'         => 'api::',
    'namespace'  => 'API',
    'prefix'     => 'api/v1'
], function () {
    // User
    Route::group([
        'as'     => 'user.',
        'prefix' => 'users'
    ], function () {
        Route::get('{user}', [ 'as' => 'show', 'uses' => 'UserController@show' ]);
        Route::put('{user}', [ 'as' => 'update', 'uses' => 'UserController@update' ]);
    });

    // Customer
    Route::group([
        'as'     => 'customer.',
        'prefix' => 'customers'
    ], function () {
        Route::get('', [ 'as' => 'index', 'uses' => 'CustomerController@index' ]);
        Route::post('', [ 'as' => 'store', 'uses' => 'CustomerController@store' ]);
        Route::get('{customer}', [ 'as' => 'show', 'uses' => 'CustomerController@show' ]);
        Route::put('{customer}', [ 'as' => 'update', 'uses' => 'CustomerController@update' ]);
        Route::delete('{customer}', [ 'as' => 'destroy', 'uses' => 'CustomerController@destroy' ]);
    });

    // Invoice
    Route::group([
        'as'     => 'invoice.',
        'prefix' => 'invoices'
    ], function () {
        Route::get('', [ 'as' => 'index', 'uses' => 'InvoiceController@index' ]);
        Route::post('', [ 'as' => 'store', 'uses' => 'InvoiceController@store' ]);
        Route::get('{invoice}', [ 'as' => 'show', 'uses' => 'InvoiceController@show' ]);
        Route::put('{invoice}', [ 'as' => 'update', 'uses' => 'InvoiceController@update' ]);
        Route::delete('{invoice}', [ 'as' => 'destroy', 'uses' => 'InvoiceController@destroy' ]);

        // Download route
        Route::post('{invoice}/upload', [ 'as' => 'upload', 'uses' => 'InvoiceController@upload' ]);
        Route::get('{invoice}/download', [ 'as' => 'download', 'uses' => 'InvoiceController@download' ]);
    });

    Route::get('/auth', function () {
        return Auth::user();
    });
});

Route::group([
    'middleware' => [ ],
    'as'         => 'web::'
], function () {
    Route::get('', [ 'as' => 'home.index', 'uses' => 'HomeController@index' ]);
});