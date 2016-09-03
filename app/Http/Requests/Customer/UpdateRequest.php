<?php

namespace App\Http\Requests\Customer;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
        $customer = $this->route()->getParameter('customer');

        return [
            'name'            => [
                'required',
                'unique:customers,name,'.$customer->id
            ],
            'telephone'       => [
                'required',
                'unique:customers,telephone,'.$customer->id
            ],
            'email'           => [
                'required',
                'email',
                'unique:customers,email,'.$customer->id
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
