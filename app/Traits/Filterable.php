<?php

namespace VividFinance\Traits;

use VividFinance\Filters\QueryFilters;

/**
 * Class Filterable
 * @package VividFinance\Traits
 */
trait Filterable
{
    /**
     * @param $query
     * @param QueryFilters $filters
     */
    public function scopeFilter($query, QueryFilters $filters)
    {
        $filters->apply($query);
    }
}