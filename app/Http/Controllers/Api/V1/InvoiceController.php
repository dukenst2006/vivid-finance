<?php

namespace App\Http\Controllers\Api\V1;

use App\Events\Invoice\Created;
use App\Events\Invoice\Deleted;
use App\Events\Invoice\Updated;
use App\Http\Requests\Invoice\StoreRequest;
use App\Http\Requests\Invoice\UpdateRequest;
use App\Invoice;
use App\Transformers\InvoiceTransformer;
use Auth;
use Illuminate\Support\Facades\Input;

/**
 * Class InvoiceController
 * @package App\Http\Controllers\Api\V1
 */
class InvoiceController extends Controller
{

    /**
     * @var InvoiceTransformer
     */
    protected $transformer;


    /**
     * InvoiceController constructor.
     *
     * @param InvoiceTransformer $transformer
     */
    public function __construct(InvoiceTransformer $transformer)
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

        $invoices = Invoice::paginate($this->getPagination());

        return $this->respondWithPagination($invoices, [
            'data' => $this->transformer->transformCollection($invoices->all())
        ]);
    }


    /**
     * @param StoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRequest $request)
    {
        $invoice = new Invoice($request->all());
        $user    = Auth::user();

        $user->invoices()->save($invoice);

        event(new Created($invoice));

        return $this->respondCreated('The invoice has been created');
    }


    /**
     * @param Invoice $invoice
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Invoice $invoice)
    {
        return $this->respond($this->transformer->transform($invoice));
    }


    /**
     * @param UpdateRequest $request
     * @param Invoice       $invoice
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateRequest $request, Invoice $invoice)
    {
        $invoice->fill($request->all());
        $invoice->save();

        event(new Updated($invoice));

        return $this->respondWithSuccess('The invoice has been updated');
    }


    /**
     * @param Invoice $invoice
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Invoice $invoice)
    {
        $invoice->delete();

        event(new Deleted($invoice->id));

        return $this->respondWithSuccess('The invoice has been deleted');
    }
}
