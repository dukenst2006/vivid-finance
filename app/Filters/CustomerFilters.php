<?php

namespace VividFinance\Filters;


class CustomerFilters extends QueryFilters
{
    public function buildingNumber($buildingNumber)
    {
        return $this->builder->where('building_number', $buildingNumber);
    }
}