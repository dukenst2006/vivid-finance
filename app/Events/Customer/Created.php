<?php

namespace App\Events\Customer;

use App\Customer;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

/**
 * Class Created
 * @package App\Events\Customer
 */
class Created implements ShouldBroadcast
{

    use InteractsWithSockets, SerializesModels;

    /**
     * @var Customer
     */
    public $customer;


    /**
     * Create a new event instance.
     *
     * @param Customer $customer
     */
    public function __construct($customer)
    {
        $this->customer = $customer;
    }


    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('customers');
    }
}
