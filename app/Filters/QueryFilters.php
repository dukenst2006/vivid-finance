<?php

namespace VividFinance\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

abstract class QueryFilters
{
    protected $request;

    protected $builder;

    /**
     * QueryFilters constructor.
     * @param $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

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

    public function filters()
    {
        return $this->request->all();
    }
}