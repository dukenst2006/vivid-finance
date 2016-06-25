<?php

namespace VividFinance\Http\Controllers\Api\Account;

use Auth;
use File;
use VividFinance\Http\Controllers\API\Controller;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\Api\Account\Avatar\StoreRequest;
use VividFinance\Transformers\Account\AvatarTransformer;

/**
 * Class AvatarController
 * @package VividFinance\Http\Controllers\API\Account
 */
class AvatarController extends Controller
{

    /**
     * The given transformer.
     * 
     * @var AvatarTransformer
     */
    protected $transformer;


    /**
     * AvatarController constructor.
     *
     * @param AvatarTransformer $transformer The given transformer
     */
    public function __construct(AvatarTransformer $transformer)
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
        $avatar = Auth::user()->avatar;

        if ( ! File::exists($avatar->getFullFile())) {
            return $this->respondNotFound('File not found');
        }

        return $this->respondWithFile($avatar->getFullFile(), $avatar->file);
    }


    /**
     * Store a newly created resource in storage.
     * 
     * @param StoreRequest $request The given request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRequest $request)
    {
        $file = $request->file('file');

        $user   = Auth::user();
        $avatar = $user->avatar;

        $avatar->file = $user->email . '.' . $file->getClientOriginalExtension();

        // Moving the invoice
        $file->move($avatar->getFilePath(), $avatar->file);
        $avatar->save();

        return $this->respondWithSuccess('The avatar has been saved');
    }
}
