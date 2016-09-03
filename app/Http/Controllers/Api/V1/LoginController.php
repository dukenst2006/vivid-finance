<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Login\LoginRequest;

use App\Http\Requests;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

/**
 * Class LoginController
 * @package App\Http\Controllers\Api\V1
 */
class LoginController extends Controller
{

    /**
     * @param LoginRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if ( ! $token = JWTAuth::attempt($credentials)) {
                return $this->respondForbidden('Invalid credentials');
            }
        } catch (JWTException $e) {
            return $this->respondInternalError('Could not create token');
        }

        return $this->respond(compact('token'));
    }
}
