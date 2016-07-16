<?php

namespace VividFinance\Http\Controllers\Api;

use Auth;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\Api\Account\UpdateRequest;
use VividFinance\Transformers\AccountTransformer;

/**
 * Class AccountController
 * @package VividFinance\Http\Controllers\API
 */
class AccountController extends Controller
{

    /**
     * The given transformer.
     *
     * @var AccountTransformer
     */
    protected $transformer;


    /**
     * AccountController constructor.
     *
     * @param AccountTransformer $transformer
     */
    public function __construct(AccountTransformer $transformer)
    {
        $this->transformer = $transformer;
    }


    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $user = Auth::user();

        return $this->respond($this->transformer->transform($user));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRequest $request The request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateRequest $request)
    {
        $user = Auth::user();
        $user->fill($request->all());
        $user->save();

        return $this->respondWithSuccess('Your account has been updated');
    }
}
