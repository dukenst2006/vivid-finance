<?php

namespace VividFinance\Http\Requests\Api\Invoice;

use VividFinance\Http\Requests\Api\Request;

/**
 * Class StoreRequest
 * @package VividFinance\Http\Requests\API\Invoice
 */
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
            'title'           => [
                'required',
                'unique:invoices,title,NULL,id,customer_id,' . $this->customer_id
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
            'recurrence'     => [
                'in:daily,weekly,monthly,yearly'
            ]
        ];
    }
}
