<?php

namespace App\Http\Controllers\Api\V1;

use App\Events\Customer\Created;
use App\Events\Customer\Deleted;
use App\Events\Customer\Updated;
use App\Http\Requests;
use App\Http\Requests\Customer\StoreRequest;
use App\Http\Requests\Customer\UpdateRequest;
use App\Models\Customer;
use App\Transformers\CustomerTransformer;
use Event;
use Illuminate\Support\Facades\Input;

/**
 * Class CustomerController
 * @package App\Http\Controllers\Api\V1
 */
class CustomerController extends Controller
{

    /**
     * @var CustomerTransformer
     */
    protected $transformer;


    /**
     * CustomerController constructor.
     *
     * @param CustomerTransformer $transformer
     */
    public function __construct(CustomerTransformer $transformer)
    {
        $this->transformer = $transformer;
    }


    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        if (Input::has('limit')) {
            $this->setPagination(Input::get('limit'));
        }

        $customers = Customer::paginate($this->getPagination());

        return $this->respondWithPagination($customers, [
            'data' => $this->transformer->transformCollection($customers->all())
        ]);
    }


    /**
     * @param StoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRequest $request)
    {
        $customer = new Customer($request->all());
        $customer->save();

        Event::fire(new Created($customer));

        return $this->respondCreated('The customer has been created');
    }


    /**
     * @param Customer $customer
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Customer $customer)
    {
        return $this->respond($this->transformer->transform($customer));
    }


    /**
     * @param UpdateRequest $request
     * @param Customer      $customer
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateRequest $request, Customer $customer)
    {
        $customer->fill($request->all());
        $customer->save();

        Event::fire(new Updated($customer));

        return $this->respondWithSuccess('The customer has been updated');
    }


    /**
     * @param Customer $customer
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();

        Event::fire(new Deleted($customer->id));

        return $this->respondWithSuccess('The customer has been deleted');
    }

}
