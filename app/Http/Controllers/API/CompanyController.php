<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Support\Facades\Input;
use VividFinance\Company;
use VividFinance\Http\Requests;
use VividFinance\Http\Requests\API\CompanyStoreRequest;
use VividFinance\Http\Requests\API\CompanyUpdateRequest;
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
     * @param  \VividFinance\Http\Requests\API\CompanyStoreRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(CompanyStoreRequest $request)
    {
        $company = new Company($request->all());
        $company->save();

        return $this->respondCreated('Company created');
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
        return $this->respond(
            $this->companyTransformer->transform($company)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \VividFinance\Http\Requests\API\CompanyUpdateRequest $request
     * @param  \VividFinance\Company $company
     *
     * @return \Illuminate\Http\Response
     */
    public function update(CompanyUpdateRequest $request, Company $company)
    {
        $company->fill($request->all());
        $company->save();

        return $this->respondWithSucces('The company has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \VividFinance\Company $company
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        $company->delete();

        return $this->respondWithSucces('The company has been deleted');
    }
}
