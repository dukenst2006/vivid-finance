<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\API\InvoiceStoreRequest;
use VividFinance\Http\Requests\API\InvoiceUpdateRequest;
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
    protected $invoiceTransformer;

    /**
     * InvoiceController constructor.
     *
     * @param \VividFinance\Transformers\InvoiceTransformer $invoiceTransformer The transformer
     */
    public function __construct(InvoiceTransformer $invoiceTransformer)
    {
        $this->invoiceTransformer = $invoiceTransformer;
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

        $invoices = Invoice::paginate($this->getPagination());

        return $this->respondWithPagination($invoices, [
            'data' => $this->invoiceTransformer->transformCollection($invoices->all())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \VividFinance\Http\Requests\API\InvoiceStoreRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(InvoiceStoreRequest $request)
    {
        $invoice = new Invoice($request->all());
        $invoice->company_id = $request->get('company_id');
        $invoice->save();

        return $this->respondCreated('Invoice created');
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
        return $this->respond(
            $this->invoiceTransformer->transform($invoice)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \VividFinance\Http\Requests\API\InvoiceUpdateRequest $request
     * @param  \VividFinance\Invoice $invoice
     *
     * @return \Illuminate\Http\Response
     */
    public function update(InvoiceUpdateRequest $request, Invoice $invoice)
    {
        $invoice->fill($request->all());
        $invoice->save();

        return $this->respondWithSucces('The invoice has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \VividFinance\Invoice $invoice
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        $invoice->delete();

        return $this->respondWithSucces('The invoice has been deleted');
    }
}