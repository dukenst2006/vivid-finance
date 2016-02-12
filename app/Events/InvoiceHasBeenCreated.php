<?php

namespace VividFinance\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class InvoiceHasBeenCreated extends Event implements ShouldBroadcast
{
    use SerializesModels;

    public $invoice;

    /**
     * Create a new event instance.
     *
     * @param array $invoice The transformed invoice
     */
    public function __construct(array $invoice)
    {
        $this->invoice = $invoice;
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
