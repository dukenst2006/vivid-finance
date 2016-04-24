<?php

namespace VividFinance\Http\Requests\API\Invoice;

use Carbon\Carbon;
use VividFinance\Http\Requests\API\Request;

/**
 * Class StoreRequest
 *
 * @property string $title
 * @property string $state
 * @property Carbon $expiration_date
 * @property int    $customer_id
 * @property \File  $file
 *
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
            ]
        ];
    }
}
