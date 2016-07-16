<?php

namespace VividFinance\Transformers;

/**
 * Class UserTransformer
 * @package VividFinance\Transformers
 */
class AccountTransformer extends Transformer
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