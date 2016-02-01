<?php

namespace VividFinance\Traits;

use Illuminate\Http\Response as IlluminateResponse;
use Illuminate\Pagination\LengthAwarePaginator;
use Response;

/**
 * Class API
 * @package VividFinance\Traits
 */
trait APITrait
{

    /**
     * The default status code
     *
     * @var int
     */
    protected $statusCode = 200;

    /**
     * Will result in a 404 error code
     *
     * @param string $message The given message
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the error message
     */
    protected function respondNotFound($message = 'Not found')
    {
        $this->setStatusCode(IlluminateResponse::HTTP_NOT_FOUND);

        return $this->respondWithError($message);
    }

    /**
     * Will result in an error
     *
     * @param string $message The given message
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the error message
     */
    public function respondWithError($message)
    {
        return $this->respond([
            'error' => [
                'message'     => $message,
                'status_code' => $this->getStatusCode()
            ]
        ]);
    }

    /**
     * Will return a response
     *
     * @param array $data The given data
     * @param array $headers The given headers
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response
     */
    public function respond($data, $headers = [])
    {
        return Response::json($data, $this->getStatusCode(), $headers);
    }

    /**
     * Getter for the status code
     *
     * @return integer The status code
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * Setter for the status code
     *
     * @param integer $statusCode The given status code
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
    }

    /**
     * Will result in a 403 error code
     *
     * @param string $message The given message
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the error message
     */
    protected function respondForbidden($message = 'Forbidden')
    {
        $this->setStatusCode(IlluminateResponse::HTTP_FORBIDDEN);

        return $this->respondWithError($message);
    }

    /**
     * Will result in a 405 error code
     *
     * @param string $message The given message
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the error message
     */
    protected function respondNotAllowed($message = 'Method not allowed')
    {
        $this->setStatusCode(IlluminateResponse::HTTP_METHOD_NOT_ALLOWED);

        return $this->respondWithError($message);
    }

    /**
     * Will result in a 201 code
     *
     * @param string $message The given message
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the message
     */
    protected function respondCreated($message = 'Item created')
    {
        $this->setStatusCode(IlluminateResponse::HTTP_CREATED);

        return $this->respondWithSucces($message);
    }

    /**
     * Will result in an success message
     *
     * @param string $message The given message
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the message
     */
    public function respondWithSucces($message)
    {
        return $this->respond([
            'success' => [
                'message'     => $message,
                'status_code' => $this->getStatusCode()
            ]
        ]);
    }

    /**
     * Will result in a 500 error code
     *
     * @param string $message The given message
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the error message
     */
    protected function respondInternalError($message = 'Internal Error')
    {
        $this->setStatusCode(IlluminateResponse::HTTP_INTERNAL_SERVER_ERROR);

        return $this->respondWithError($message);
    }

    /**
     * Will result in a 400 error code
     *
     * @param string $message The given message
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the error code
     */
    protected function respondBadRequest($message = 'Bad request')
    {
        $this->setStatusCode(IlluminateResponse::HTTP_BAD_REQUEST);

        return $this->respondWithError($message);
    }

    /**
     * Will result in a 422 error code
     *
     * @param string $message The given message
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the error code
     */
    protected function respondUnprocessableEntity($message = 'Unprocessable')
    {
        $this->setStatusCode(IlluminateResponse::HTTP_UNPROCESSABLE_ENTITY);

        return $this->respondWithError($message);
    }

    /**
     * Will result in an array with a paginator
     *
     * @param LengthAwarePaginator $items The paginated items
     * @param array $data The data
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response with the paginated results
     */
    protected function respondWithPagination(LengthAwarePaginator $items, $data)
    {
        $data = array_merge($data, [
            'paginator' => [
                'total_count'  => $items->total(),
                'total_pages'  => $items->lastPage(),
                'current_page' => $items->currentPage(),
                'limit'        => $items->perPage()
            ]
        ]);

        return $this->respond($data);
    }
}