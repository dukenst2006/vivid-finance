<?php

namespace VividFinance\Events;

use VividFinance\Customer;
use VividFinance\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class CustomerHasBeenCreated extends Event implements ShouldBroadcast
{
    use SerializesModels;

    public $customer;

    /**
     * Create a new event instance.
     *
     * @param array $customer The transformed customer
     */
    public function __construct(array $customer)
    {
        $this->customer = $customer;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['Test'];
    }
}
