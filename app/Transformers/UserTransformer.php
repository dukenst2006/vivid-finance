<?php

namespace VividFinance\Transformers;


class UserTransformer extends Transformer
{

    public function transform($user)
    {
        return [
            'email'     => $user['email'],
            'mobile'    => $user['mobile_phone'],
            'telephone' => $user['telephone'],
            'birthday'  => $user->birthday->toDateString(),
            'gender'    => $user['sex'],
            'bio'       => $user['bio']
        ];
    }
}