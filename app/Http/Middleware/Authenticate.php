<?php

namespace VividFinance\Http\Middleware;

use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use VividFinance\Traits\Restable;
use Illuminate\Contracts\Events\Dispatcher;

class Authenticate
{

    use Restable;

    protected $events;

    protected $auth;

    public function __construct(Dispatcher $events, JWTAuth $auth)
    {
        $this->events = $events;
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, \Closure $next)
    {
        if ( ! $token = $this->auth->setRequest($request)->getToken()) {
            return $this->respondBadRequest('No token provided');
        }

        try {
            $user = $this->auth->authenticate($token);
        } catch (TokenExpiredException $e) {
            return $this->respondUnauthorized('Token expired');
        } catch (JWTException $e) {
            return $this->respondInternalError('Token invalid');
        }

        if ( ! $user) {
            return $this->respondNotFound('User Not Found');
        }

        $this->events->fire('tymon.jwt.valid', $user);

        return $next($request);
    }
}
