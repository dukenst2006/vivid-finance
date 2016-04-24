<?php

namespace VividFinance\Http\Controllers\API;

use Auth;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\API\Account\UpdateRequest;
use VividFinance\Transformers\AccountTransformer;

/**
 * Class AccountController
 * @package VividFinance\Http\Controllers\API
 */
class AccountController extends Controller
{

    /**
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $user = Auth::user();

        return $this->respond($this->transformer->transform($user));
    }


    /**
     * @param UpdateRequest $request
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
