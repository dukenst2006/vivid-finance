<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Support\Facades\Input;
use VividFinance\Customer;
use VividFinance\Events\CustomerHasBeenCreated;
use VividFinance\Filters\CustomerFilters;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\API\Customer\DestroyRequest;
use VividFinance\Http\Requests\API\Customer\IndexRequest;
use VividFinance\Http\Requests\API\Customer\ShowRequest;
use VividFinance\Http\Requests\API\Customer\StoreRequest;
use VividFinance\Http\Requests\API\Customer\UpdateRequest;
use VividFinance\Transformers\CustomerTransformer;

/**
 * Class CustomerController
 * @package VividFinance\Http\Controllers\API
 */
class CustomerController extends Controller
{

    /**
     * The transformer used to transform the data
     *
     * @var CustomerTransformer The transformer
     */
    protected $customerTransformer;


    /**
     * CustomerController constructor.
     *
     * @param \VividFinance\Transformers\CustomerTransformer $customerTransformer The transformer
     */
    public function __construct(CustomerTransformer $customerTransformer)
    {
        $this->customerTransformer = $customerTransformer;
    }


    /**
     * Display a listing of the resource.
     *
     * @param IndexRequest    $request
     *
     * @param CustomerFilters $filters
     *
     * @return \Illuminate\Http\Response
     */
    public function index(IndexRequest $request, CustomerFilters $filters)
    {
        if (Input::get('limit')) {
            $this->setPagination(Input::get('limit'));
        }

        $customers = Customer::filter($filters)->paginate($this->getPagination());

        return $this->respondWithPagination($customers, [
            'data' => $this->customerTransformer->transformCollection($customers->all())
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $customer = new Customer($request->all());
        $customer->save();

        event(new CustomerHasBeenCreated($this->customerTransformer->transform($customer)));

        return $this->respondCreated('Customer created');
    }


    /**
     * Display the specified resource.
     *
     * @param ShowRequest             $request
     * @param  \VividFinance\Customer $customer
     *
     * @return \Illuminate\Http\Response
     */
    public function show(ShowRequest $request, Customer $customer)
    {
        return $this->respond($this->customerTransformer->transform($customer));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRequest           $request
     * @param  \VividFinance\Customer $customer
     *
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, Customer $customer)
    {
        $customer->fill($request->all());
        $customer->save();

        return $this->respondWithSuccess('The customer has been updated');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param DestroyRequest          $request
     * @param  \VividFinance\Customer $customer
     *
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(DestroyRequest $request, Customer $customer)
    {
        $customer->delete();

        return $this->respondWithSuccess('The customer has been deleted');
    }
}
