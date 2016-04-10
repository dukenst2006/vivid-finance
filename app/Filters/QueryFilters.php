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
     * @var Request
     */
    protected $request;

    /**
     * @var
     */
    protected $builder;

    /**
     * QueryFilters constructor.
     * @param $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * @param Builder $builder
     * @return Builder
     */
    public function apply(Builder $builder)
    {
        $this->builder = $builder;
        foreach ($this->filters() as $name => $value) {
            $name = camel_case($name);

            if (!method_exists($this, $name)) {
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
     * @return array
     */
    public function filters()
    {
        return $this->request->all();
    }
}