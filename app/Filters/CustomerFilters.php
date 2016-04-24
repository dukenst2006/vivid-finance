<?php

namespace VividFinance\Filters;

/**
 * Class CustomerFilters
 * @package VividFinance\Filters
 */
class CustomerFilters extends QueryFilters
{

    /**
     * Searches for the name.
     *
     * @param String $name The given name
     *
     * @return mixed
     */
    public function name($name)
    {
        return $this->builder->where('name', 'like', "%$name%");
    }


    /**
     * Searches for the building number.
     *
     * @param String $buildingNumber The given building number
     *
     * @return mixed
     */
    public function buildingNumber($buildingNumber)
    {
        return $this->builder->where('building_number', 'like', "%$buildingNumber%");
    }
}