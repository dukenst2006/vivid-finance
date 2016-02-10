<?php

namespace VividFinance\Listeners;

use VividFinance\Events\CustomerHasBeenCreated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Email
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  CustomerHasBeenCreated  $event
     * @return void
     */
    public function handle(CustomerHasBeenCreated $event)
    {
        //
    }
}
