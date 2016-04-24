<?php

namespace VividFinance\Http\Controllers\Api;

use File;
use Illuminate\Support\Facades\Input;
use VividFinance\Customer;
use VividFinance\Events\InvoiceHasBeenCreated;
use VividFinance\Filters\InvoiceFilters;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\Api\Invoice\StoreRequest;
use VividFinance\Http\Requests\Api\Invoice\UpdateRequest;
use VividFinance\Http\Requests\Api\Invoice\UploadRequest;
use VividFinance\Invoice;
use VividFinance\Transformers\InvoiceTransformer;

/**
 * Class InvoiceController
 * @package VividFinance\Http\Controllers\API
 */
class InvoiceController extends Controller
{

    /**
     * The transformer used to transform the data
     *
     * @var InvoiceTransformer The transformer
     */
    protected $transformer;


    /**
     * InvoiceController constructor.
     *
     * @param \VividFinance\Transformers\InvoiceTransformer $transformer The transformer
     */
    public function __construct(InvoiceTransformer $transformer)
    {
        $this->transformer = $transformer;
    }


    /**
     * Display a listing of the resource.
     *
     * @param InvoiceFilters $filters
     *
     * @return \Illuminate\Http\Response
     */
    public function index(InvoiceFilters $filters)
    {
        if (Input::get('limit')) {
            $this->setPagination(Input::get('limit'));
        }

        $invoices = Invoice::filter($filters)->paginate($this->getPagination());

        return $this->respondWithPagination($invoices, [
            'data' => $this->transformer->transformCollection($invoices->all())
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
        $customer = Customer::findOrFail($request->customer_id);

        $invoice = new Invoice($request->all());
        $customer->addInvoice($invoice);

        event(new InvoiceHasBeenCreated($this->transformer->transform($invoice)));

        return $this->respondCreated('The invoice has been created');
    }


    /**
     * Display the specified resource.
     *
     * @param  \VividFinance\Invoice $invoice
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice)
    {
        return $this->respond($this->transformer->transform($invoice));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRequest          $request
     * @param  \VividFinance\Invoice $invoice
     *
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, Invoice $invoice)
    {
        $invoice->fill($request->all());
        $invoice->save();

        return $this->respondWithSuccess('The invoice has been updated');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \VividFinance\Invoice $invoice
     *
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Invoice $invoice)
    {
        $invoice->delete();

        return $this->respondWithSuccess('The invoice has been deleted');
    }


    /**
     * Upload the desired invoice.
     *
     * @param UploadRequest $request
     * @param Invoice       $invoice
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function upload(UploadRequest $request, Invoice $invoice)
    {
        $file = $request->file('file');

        $invoice->file = $invoice->title . '.' . $file->getClientOriginalExtension();

        // Moving the invoice
        $file->move($invoice->getFilePath(), $invoice->file);
        $invoice->save();

        return $this->respondWithSuccess('The file has been uploaded');
    }


    /**
     * Download the desired invoice.
     *
     * @param Invoice $invoice
     *
     * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function download(Invoice $invoice)
    {
        if ( ! File::exists($invoice->getFullFile())) {
            return $this->respondNotFound('File not found');
        }

        return $this->respondWithFile($invoice->getFullFile(), $invoice->file);
    }
}