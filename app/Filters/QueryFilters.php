<?php

namespace VividFinance\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

/**
 * Class QueryFilters
 * @package VividFinance\Filters
 */
abstract class QueryFilters
{

    /**
     * The given request
     * 
     * @var Request
     */
    protected $request;

    /**
     * The given builder
     * 
     * @var Builder
     */
    protected $builder;


    /**
     * QueryFilters constructor.
     *
     * @param Request $request The given request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }


    /**
     * Function to apply the filters.
     * 
     * @param Builder $builder The given builder
     *
     * @return Builder
     */
    public function apply(Builder $builder)
    {
        $this->builder = $builder;
        foreach ($this->filters() as $name => $value) {
            $name = camel_case($name);

            if ( ! method_exists($this, $name)) {
                continue;
            }

            if (trim($value)) {
                $this->$name($value);
            } else {
                $this->$name();
            }
        }

        return $this->builder;
    }


    /**
     * Get all the filters.
     * 
     * @return array
     */
    public function filters()
    {
        return $this->request->all();
    }
}