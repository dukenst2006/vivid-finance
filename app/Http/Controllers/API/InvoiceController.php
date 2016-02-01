<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use VividFinance\Http\Requests;
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
     * @param  \VividFinance\Invoice $invoice
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \VividFinance\Invoice $invoice
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Invoice $invoice)
    {
        //
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
        //
    }
}
