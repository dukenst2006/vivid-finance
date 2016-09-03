<?php

namespace App\Events\User;

use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

/**
 * Class Registered
 * @package App\Events\User
 */
class Registered implements ShouldBroadcast
{

    use InteractsWithSockets, SerializesModels;

    /**
     * @var User
     */
    public $user;

    /**
     * @var UserTransformer
     */
    protected $transformer;


    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user        = $user;
        $this->transformer = new UserTransformer();
    }


    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('users');
    }


    /**
     *
     */
    public function broadcastWith()
    {
        $this->transformer->transform($this->user);
    }
}
