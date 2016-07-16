<?php

namespace VividFinance\Transformers;

/**
 * Class CustomerTransformer
 * @package VividFinance\Transformers
 */
class CustomerTransformer extends Transformer
{

    /**
     * Transformer for the customer
     *
     * @param \VividFinance\Customer $customer The customer from the database
     *
     * @return array The valid output, displayed in the API
     */
    public function transform($customer)
    {
        return [
            'id'              => (int) $customer->id,
            'name'            => $customer->name,
            'telephone'       => $customer->telephone,
            'email'           => $customer->email,
            'country'         => $customer->country,
            'city'            => $customer->city,
            'postcode'        => $customer->postcode,
            'building_number' => $customer->building_number
        ];
    }
}