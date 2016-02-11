<?php

namespace VividFinance\Http\Middleware;

use Closure;
use VividFinance\Traits\APITrait;

class ThrottleRequests extends \Illuminate\Routing\Middleware\ThrottleRequests
{
    use APITrait;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param  int $maxAttempts
     * @param  int $decayMinutes
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $maxAttempts = 60, $decayMinutes = 1)
    {
        $key = $this->resolveRequestSignature($request);

        if ($this->limiter->tooManyAttempts($key, $maxAttempts, $decayMinutes)) {
            return $this->respondTooManyRequests('Too many requests', [
                'Retry-After'           => $this->limiter->availableIn($key),
                'X-RateLimit-Limit'     => $maxAttempts,
                'X-RateLimit-Remaining' => 0,
            ]);
        }

        $this->limiter->hit($key, $decayMinutes);

        $response = $next($request);

        $response->headers->add([
            'X-RateLimit-Limit'     => $maxAttempts,
            'X-RateLimit-Remaining' => $maxAttempts - $this->limiter->attempts($key) + 1,
        ]);

        return $response;
    }
}
