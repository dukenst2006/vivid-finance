<?php

namespace VividFinance\Filters;


/**
 * Class CustomerFilters
 * @package VividFinance\Filters
 */
class CustomerFilters extends QueryFilters
{
    /**
     * @param $buildingNumber
     * @return mixed
     */
    public function buildingNumber($buildingNumber)
    {
        return $this->builder->where('building_number', $buildingNumber);
    }
}