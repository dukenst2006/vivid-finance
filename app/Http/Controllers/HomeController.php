<?php

namespace VividFinance\Http\Controllers;

use Illuminate\Http\Request;

use View;
use VividFinance\Http\Requests;
use VividFinance\Http\Controllers\Controller;

class HomeController extends Controller
{

    /**
     * Show the SPA to the user
     *
     * @return \Illuminate\Contracts\View\View The view
     */
    public function index()
    {
        return View::make('home');
    }
}
