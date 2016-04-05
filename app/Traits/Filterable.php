<?php

namespace VividFinance\Traits;

use VividFinance\Filters\QueryFilters;

trait Filterable
{
    public function scopeFilter($query, QueryFilters $filters)
    {
        $filters->apply($query);
    }
}