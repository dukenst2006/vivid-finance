<?php

namespace VividFinance\Http\Requests\API;

/**
 * Class CompanyUpdateRequest
 * @package VividFinance\Http\Requests\API
 */
class CompanyUpdateRequest extends Request
{

    /**
     * The given company
     *
     * @var int The given company
     */
    protected $company;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $this->company = $this->route()->getParameter('company');

        return [
            'name'            => [
                'required',
                'unique:companies,name,' . $this->company->id
            ],
            'telephone'       => [
                'required',
                'unique:companies,telephone,' . $this->company->id
            ],
            'email'           => [
                'required',
                'email',
                'unique:companies,email,' . $this->company->id
            ],
            'country'         => [
                'required'
            ],
            'city'            => [
                'required'
            ],
            'postcode'        => [
                'required'
            ],
            'building_number' => [
                'required'
            ]
        ];
    }
}
