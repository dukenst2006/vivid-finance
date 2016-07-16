<?php

namespace VividFinance\Http\Requests\Api\Account\Avatar;

use VividFinance\Http\Requests\Api\Request;

/**
 * Class StoreRequest
 * @package VividFinance\Http\Requests\API\Account\Avatar
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
            'file' => [
                'required',
                'max:2048',
                'image'
            ]
        ];
    }
}
