<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use VividFinance\Http\Requests;
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Input::get('limit')) {
            $this->setPagination(Input::get('limit'));
        }

        $users = User::paginate($this->getPagination());

        return $this->respondWithPagination($users, [
            'data' => $this->userTransformer->transformCollection($users->all())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \VividFinance\User $user
     *
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return $this->respond(
            $this->userTransformer->transform($user)
        );
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \VividFinance\User $user
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \VividFinance\User $user
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
