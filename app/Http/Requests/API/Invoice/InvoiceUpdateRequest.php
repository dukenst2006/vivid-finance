<?php

namespace VividFinance\Http\Requests\API\Invoice;

use VividFinance\Http\Requests\API\Request;

class InvoiceUpdateRequest extends Request
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
            'title'           => [
                'required'
            ],
            'state'           => [
                'required',
                'in:open,closed'
            ],
            'expiration_date' => [
                'required',
                'date'
            ],
            'customer_id'     => [
                'required',
                'integer'
            ]
        ];
    }
}
