<?php

namespace VividFinance\Http\Requests\API\Customer;

use VividFinance\Http\Requests\API\Request;

class StoreRequest extends Request
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
                'unique:customers,name'
            ],
            'telephone'       => [
                'required',
                'unique:customers,telephone'
            ],
            'email'           => [
                'required',
                'unique:customers,email'
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
