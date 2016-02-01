<?php

namespace VividFinance\Transformers;

/**
 * Class CompanyTransformer
 * @package VividFinance\Transformers
 */
class CompanyTransformer extends Transformer
{
    /**
     * Transformer for the company
     *
     * @param \VividFinance\Company $company The company from the database
     *
     * @return array The valid output, displayed in the API
     */
    public function transform($company)
    {
        return [
            'id'              => (int)$company->id,
            'name'            => $company->name,
            'telephone'       => $company->telephone,
            'email'           => $company->email,
            'country'         => $company->country,
            'city'            => $company->city,
            'postcode'        => $company->postcode,
            'building_number' => $company->building_number
        ];
    }
}