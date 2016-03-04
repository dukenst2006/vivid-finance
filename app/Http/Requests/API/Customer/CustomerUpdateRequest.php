<?php

namespace VividFinance\Http\Requests\API\Customer;

use VividFinance\Http\Requests\API\Request;

/**
 * Class CustomerUpdateRequest
 * @package VividFinance\Http\Requests\API
 */
class CustomerUpdateRequest extends Request
{

    /**
     * The given customer
     *
     * @var int The given customer
     */
    protected $customer;


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
        $this->customer = $this->route()->getParameter('customer');

        return [
            'name'            => [
                'required',
                'unique:customers,name,' . $this->customer->id
            ],
            'telephone'       => [
                'required',
                'unique:customers,telephone,' . $this->customer->id
            ],
            'email'           => [
                'required',
                'email',
                'unique:customers,email,' . $this->customer->id
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
