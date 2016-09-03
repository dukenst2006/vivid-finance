<?php

namespace App\Events\Customer;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

/**
 * Class Deleted
 * @package App\Events\Customer
 */
class Deleted implements ShouldBroadcast
{

    use InteractsWithSockets, SerializesModels;

    /**
     * @var
     */
    public $id;


    /**
     * Create a new event instance.
     *
     * @param $id
     */
    public function __construct($id)
    {
        $this->id = $id;
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
