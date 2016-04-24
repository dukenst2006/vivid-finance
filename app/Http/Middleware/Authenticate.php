<?php

namespace VividFinance\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use VividFinance\Traits\RestAble;

class Authenticate
{

    use RestAble;


    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     * @param  string|null              $guard
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->guest()) {
            if ($request->ajax() || $request->wantsJson()) {
                return $this->respondUnauthorized();
            } else {
                return redirect()->guest('login');
            }
        }

        return $next($request);
    }
}
