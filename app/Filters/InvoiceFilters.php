<?php

namespace VividFinance\Filters;


/**
 * Class InvoiceFilters
 * @package VividFinance\Filters
 */
class InvoiceFilters extends QueryFilters
{

    /**
     * Searches for title
     * 
     * @param String $title The given title
     * @return mixed
     */
    public function title($title)
    {
        return $this->builder->where('title', $title);
    }

    /**
     * Searcher for the state
     * 
     * @param String $state The given state
     * @return mixed
     */
    public function state($state)
    {
        return $this->builder->where('state', $state);
    }
}