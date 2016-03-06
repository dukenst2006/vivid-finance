<?php

namespace VividFinance\Transformers;

/**
 * Class UserTransformer
 * @package VividFinance\Transformers
 */
class UserTransformer extends Transformer
{

    /**
     * Transformer for the user
     *
     * @param \VividFinance\User $user The user from the database
     *
     * @return array The valid output, displayed in the API
     */
    public function transform($user)
    {
        return [
            'id'        => (int) $user->id,
            'email'     => $user->email,
            'mobile'    => $user->mobile_phone,
            'telephone' => $user->telephone,
            'birthday'  => $user->birthday->toDateString(),
            'gender'    => $user->sex,
            'bio'       => $user->bio
        ];
    }
}