<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use VividFinance\Company;
use VividFinance\Http\Requests;
use VividFinance\Transformers\CompanyTransformer;

/**
 * Class CompanyController
 * @package VividFinance\Http\Controllers\API
 */
class CompanyController extends Controller
{
    /**
     * The transformer used to transform the data
     *
     * @var CompanyTransformer The transformer
     */
    protected $companyTransformer;

    /**
     * CompanyController constructor.
     *
     * @param \VividFinance\Transformers\CompanyTransformer $companyTransformer The transformer
     */
    public function __construct(CompanyTransformer $companyTransformer)
    {
        $this->companyTransformer = $companyTransformer;
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

        $company = Company::paginate($this->getPagination());

        return $this->respondWithPagination($company, [
            'data' => $this->companyTransformer->transformCollection($company->all())
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
     * @param  \VividFinance\Company $company
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \VividFinance\Company $company
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \VividFinance\Company $company
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($company)
    {
        //
    }
}
