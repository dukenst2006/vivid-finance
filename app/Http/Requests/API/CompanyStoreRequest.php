<?php

namespace VividFinance\Http\Requests\API;

class CompanyStoreRequest extends Request
{
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
        return [
            'name'            => [
                'required',
                'unique:companies,name'
            ],
            'telephone'       => [
                'required',
                'unique:companies,telephone'
            ],
            'email'           => [
                'required',
                'unique:companies,email'
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
