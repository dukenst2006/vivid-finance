<?php

namespace VividFinance\Events;

use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

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
