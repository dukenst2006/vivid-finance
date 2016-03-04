<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\API\User\DestroyRequest;
use VividFinance\Http\Requests\API\User\IndexRequest;
use VividFinance\Http\Requests\API\User\ShowRequest;
use VividFinance\Http\Requests\API\User\StoreRequest;
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
     * Display a listing of the resource.
     *
     * @param IndexRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function index(IndexRequest $request)
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
     * @param Request|StoreRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        //
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
        //
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param DestroyRequest      $request
     * @param  \VividFinance\User $user
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(DestroyRequest $request, User $user)
    {
        //
    }
}
