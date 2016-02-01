<?php

namespace VividFinance\Http\Controllers\API;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Routing\Controller as BaseController;
use VividFinance\Traits\APITrait;

/**
 * Class Controller
 * @package VividFinance\Http\Controllers\API
 */
class Controller extends BaseController
{
    use AuthorizesRequests, APITrait;

    /**
     * The default pagination size
     *
     * @var int The pagination size
     */
    protected $pagination = 5;

    /**
     * The maximum pagination size
     *
     * @var int The pagination size
     */
    protected $maxLimit = 50;

    /**
     * The minimum pagination size
     *
     * @var int The pagination size
     */
    protected $minLimit = 1;

    /**
     * Getter for the pagination
     *
     * @return int The pagination size
     */
    public function getPagination()
    {
        return $this->pagination;
    }

    /**
     * Sets and checks the pagination
     *
     * @param int $pagination The given pagination
     */
    public function setPagination($pagination)
    {
        $tempPagination = $this->pagination;
        if ($pagination > $this->maxLimit) {
            $tempPagination = $this->maxLimit;
        }

        if ($pagination < $this->minLimit) {
            $tempPagination = $this->minLimit;
        }

        if ( ! ($pagination > $this->maxLimit) && ! ($pagination < $this->minLimit)) {
            $tempPagination = $pagination;
        }

        if ( ! is_numeric($pagination)) {
            $tempPagination = $this->pagination;
        }

        $this->pagination = (int)$tempPagination;
    }
}
