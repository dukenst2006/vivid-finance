<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Support\Facades\Input;
use VividFinance\Customer;
use VividFinance\Events\CustomerHasBeenCreated;
use VividFinance\Filters\CustomerFilters;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\API\Customer\DestroyRequest;
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
    protected $transformer;


    /**
     * CustomerController constructor.
     *
     * @param \VividFinance\Transformers\CustomerTransformer $transformer The transformer
     */
    public function __construct(CustomerTransformer $transformer)
    {
        $this->transformer = $transformer;
    }


    /**
     * Display a listing of the resource.
     *
     * @param CustomerFilters $filters
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CustomerFilters $filters)
    {
        if (Input::get('limit')) {
            $this->setPagination(Input::get('limit'));
        }

        $customers = Customer::filter($filters)->paginate($this->getPagination());

        return $this->respondWithPagination($customers, [
            'data' => $this->transformer->transformCollection($customers->all())
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

        event(new CustomerHasBeenCreated($this->transformer->transform($customer)));

        return $this->respondCreated('The customer has been created');
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
        return $this->respond($this->transformer->transform($customer));
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
     * @param  \VividFinance\Customer $customer
     *
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();

        return $this->respondWithSuccess('The customer has been deleted');
    }
}
