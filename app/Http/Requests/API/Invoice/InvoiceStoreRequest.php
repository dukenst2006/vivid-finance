<?php

namespace VividFinance\Http\Requests\API\Invoice;

use VividFinance\Http\Requests\API\Request;

class InvoiceStoreRequest extends Request
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
                'required',
                'unique:invoices,title,NULL,customer_id'
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
            ],
            'file'            => [
                'required',
                'max:5120',
                'mimes:application/pdf,pdf'
            ]
        ];
    }
}
