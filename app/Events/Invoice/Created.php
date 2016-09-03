<?php

namespace App\Events\Invoice;

use App\Invoice;
use App\Transformers\InvoiceTransformer;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

/**
 * Class Created
 * @package App\Events\Invoice
 */
class Created implements ShouldBroadcast
{

    use InteractsWithSockets, SerializesModels;

    /**
     * @var
     */
    public $invoice;

    /**
     * @var InvoiceTransformer
     */
    protected $transformer;


    /**
     * Create a new event instance.
     *
     * @param Invoice $invoice
     */
    public function __construct(Invoice $invoice)
    {
        $this->invoice     = $invoice;
        $this->transformer = new InvoiceTransformer();
    }


    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('invoices');
    }


    public function broadcastWith()
    {
        return $this->transformer->transform($this->invoice);
    }
}
