<?php

namespace VividFinance\Http\Controllers;

use View;
use VividFinance\Http\Requests;

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
