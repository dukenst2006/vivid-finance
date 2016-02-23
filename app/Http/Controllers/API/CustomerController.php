<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Support\Facades\Input;
use VividFinance\Customer;
use VividFinance\Events\CustomerHasBeenCreated;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\API\CustomerStoreRequest;
use VividFinance\Http\Requests\API\CustomerUpdateRequest;
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
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Input::get('limit')) {
            $this->setPagination(Input::get('limit'));
        }

        $customer = Customer::paginate($this->getPagination());

        return $this->respondWithPagination($customer, [
            'data' => $this->customerTransformer->transformCollection($customer->all())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \VividFinance\Http\Requests\API\CustomerStoreRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(CustomerStoreRequest $request)
    {
        $customer = new Customer($request->all());
        $customer->save();

        event(new CustomerHasBeenCreated($this->customerTransformer->transform($customer)));

        return $this->respondCreated('Customer created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \VividFinance\Customer $customer
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        return $this->respond(
            $this->customerTransformer->transform($customer)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \VividFinance\Http\Requests\API\CustomerUpdateRequest $request
     * @param  \VividFinance\Customer $customer
     *
     * @return \Illuminate\Http\Response
     */
    public function update(CustomerUpdateRequest $request, Customer $customer)
    {
        $customer->fill($request->all());
        $customer->save();

        return $this->respondWithSuccess('The customer has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \VividFinance\Customer $customer
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
//        $customer->delete();

        return $this->respondWithSuccess('The customer has been deleted');
    }
}
