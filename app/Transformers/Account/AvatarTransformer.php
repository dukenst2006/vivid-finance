<?php

namespace VividFinance\Transformers\Account;

use VividFinance\Transformers\Transformer;

/**
 * Class AvatarTransformer
 * @package VividFinance\Transformers\Account
 */
class AvatarTransformer extends Transformer
{

    /**
     * Transformer for the models
     *
     * @param  \Illuminate\Database\Eloquent\Model $item The model from the database
     *
     * @return array The valid output, displayed in the API
     */
    public function transform($avatar)
    {
        return [
            'file' => $avatar->file
        ];
    }
}