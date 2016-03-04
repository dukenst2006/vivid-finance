<?php

namespace VividFinance\Http\Requests\API\Invoice;

use Carbon\Carbon;
use VividFinance\Http\Requests\API\Request;

/**
 * Class UpdateRequest
 *
 * @property string $title
 * @property string $state
 * @property Carbon $expiration_date
 * @property int    $customer_id
 *
 * @package VividFinance\Http\Requests\API\Invoice
 */
class UpdateRequest extends Request
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
