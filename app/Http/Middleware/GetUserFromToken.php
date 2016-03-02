<?php

/*
 * This file is part of jwt-auth.
 *
 * (c) Sean Tymon <tymon148@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace VividFinance\Http\Middleware;

use Illuminate\Events\Dispatcher;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\JWTAuth;
use VividFinance\Traits\APITrait;

class GetUserFromToken
{
    use APITrait;

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
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, \Closure $next)
    {
        if (! $token = $this->auth->setRequest($request)->getToken()) {
            return $this->respondBadRequest('No JWT Token Provided');
        }

        try {
            $user = $this->auth->authenticate($token);
        } catch (TokenExpiredException $e) {
            return $this->respondForbidden('Token expired');
        } catch (JWTException $e) {
            return $this->respondForbidden('Token invalid');
        }

        if (! $user) {
            return $this->respondNotFound('User not found');
        }

        $this->events->fire('tymon.jwt.valid', $user);

        return $next($request);
    }
}
