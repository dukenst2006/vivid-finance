<?php

namespace VividFinance\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;
use VividFinance\Traits\RestAble;

/**
 * Class Request
 * @package VividFinance\Http\Requests\API
 */
class Request extends FormRequest
{

    use RestAble;


    /**
     * Response to a forbidden request
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response
     */
    public function forbiddenResponse()
    {
        return $this->respondForbidden();
    }


    /**
     * Get the proper failed validation response for the request.
     *
     * @param  array $errors
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response
     */
    public function response(array $errors)
    {
        return $this->respondUnprocessableEntity($errors);
    }
}