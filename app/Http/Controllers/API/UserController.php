<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Http\Request;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\API\User\ShowRequest;
use VividFinance\Http\Requests\API\User\UpdateRequest;
use VividFinance\Transformers\UserTransformer;
use VividFinance\User;

/**
 * Class UserController
 * @package VividFinance\Http\Controllers\API
 */
class UserController extends Controller
{

    /**
     * The user transformer
     *
     * @var UserTransformer
     */
    protected $userTransformer;


    /**
     * UserController constructor.
     *
     * @param \VividFinance\Transformers\UserTransformer $userTransformer The transformer
     */
    public function __construct(UserTransformer $userTransformer)
    {
        $this->userTransformer = $userTransformer;
    }


    /**
     * Display the specified resource.
     *
     * @param ShowRequest         $request
     * @param  \VividFinance\User $user
     *
     * @return \Illuminate\Http\Response
     */
    public function show(ShowRequest $request, User $user)
    {
        return $this->respond($this->userTransformer->transform($user));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param Request|UpdateRequest $request
     * @param  \VividFinance\User   $user
     *
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, User $user)
    {
        $user->fill($request->all());
        $user->save();

        return $this->respondWithSuccess('The user has been updated');
    }
}
