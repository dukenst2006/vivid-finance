<?php

namespace VividFinance\Http\Middleware;

use Illuminate\Routing\Middleware\ThrottleRequests as BaseThrottleRequests;
use VividFinance\Traits\APITrait;

class ThrottleRequests extends BaseThrottleRequests
{

    use APITrait;


    /**
     * Create a 'too many attempts' response.
     *
     * @param  string $key
     * @param  int    $maxAttempts
     *
     * @return \Illuminate\Http\Response
     */
    protected function buildResponse($key, $maxAttempts)
    {
        $response = $this->respondTooManyRequests('Too many requests');

        return $this->addHeaders($response, $maxAttempts, $this->calculateRemainingAttempts($key, $maxAttempts),
            $this->limiter->availableIn($key));
    }
}
