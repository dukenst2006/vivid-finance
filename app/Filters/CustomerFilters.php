<?php

namespace VividFinance\Filters;


/**
 * Class CustomerFilters
 * @package VividFinance\Filters
 */
/**
 * Class CustomerFilters
 * @package VividFinance\Filters
 */
class CustomerFilters extends QueryFilters
{
    /**
     * Searcher for name
     *
     * @param String $name The given name
     * @return mixed
     */
    public function name($name)
    {
        return $this->builder->where('name', $name);
    }

    /**
     * Searches for building number
     *
     * @param String $buildingNumber The given building number
     * @return mixed
     */
    public function buildingNumber($buildingNumber)
    {
        return $this->builder->where('building_number', $buildingNumber);
    }
}