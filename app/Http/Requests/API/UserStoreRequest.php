<?php

namespace VividFinance\Http\Requests\API;

class UserStoreRequest extends Request
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
            'email'        => [
                'required',
                'email',
                'unique:users,email'
            ],
            'password'     => [
                'required',
                'min:6',
                'max:20',
                'regex:/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).)/'
            ],
            'name'         => [
                'required',
                'regex:/^([ \x{00c0}-\x{01ff}a-zA-Z\'\-])+$/u'
            ],
            'birthday'     => [
                'date',
                'after:' . strtotime('-100 years'),
                'before:' . date('Y-m-d')
            ],
            'website'      => [
                'regex:/^([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$/'
            ],
            'telephone'    => [
                'regex:/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/'
            ],
            'mobile_phone' => [
                'regex:/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/'
            ],
            'sex'          => [
                'in:Male,Female'
            ],
            'bio'          => [

            ]
        ];
    }
}
