<?php

namespace App\Events\Customer;

use App\Models\Customer;
use App\Transformers\CustomerTransformer;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

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
     * @var CustomerTransformer
     */
    protected $transformer;


    /**
     * Create a new event instance.
     *
     * @param Customer $customer
     */
    public function __construct(Customer $customer)
    {
        $this->customer    = $customer;
        $this->transformer = new CustomerTransformer();
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


    /**
     * @return array
     */
    public function broadcastWith()
    {
        return $this->transformer->transform($this->customer);
    }
}
