<?php

namespace App\Http\Controllers\Api\V1;

use App\Events\User\Registered;
use App\Http\Requests;
use App\Http\Requests\Register\RegisterRequest;
use App\Models\User;
use Event;

/**
 * Class RegisterController
 * @package App\Http\Controllers\Api\V1
 */
class RegisterController extends Controller
{

    /**
     * @param RegisterRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request)
    {
        $user           = new User($request->except([ 'password_confirm', 'password' ]));
        $user->password = bcrypt($request->password);
        $user->save();

        Event::fire(new Registered($user));

        return $this->respondCreated('Successfully registered');
    }
}