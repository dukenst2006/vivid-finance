<?php

namespace App\Transformers;

class UserTransformer extends Transformer
{

    /**
     * Transformer for the models
     *
     * @param $user \App\Models\User The model from the database
     *
     * @return array The valid output, displayed in the API
     */
    public function transform($user)
    {
        return [
            'id'        => (int) $user->id,
            'email'     => $user->email,
            'name'      => $user->name,
            'mobile'    => $user->mobile_phone,
            'telephone' => $user->telephone,
            'birthday'  => $user->birthday ? $user->birthday->toDateString() : null,
            'gender'    => $user->sex,
            'bio'       => $user->bio,
            'avatar'    => $user->avatar
        ];
    }
}