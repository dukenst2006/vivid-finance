<?php

namespace VividFinance\Listeners;

use VividFinance\Events\InvoiceHasBeenCreated;

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
     * @param InvoiceHasBeenCreated $event
     */
    public function sendInvoiceToAdmin(InvoiceHasBeenCreated $event)
    {
        //
    }


    /**
     * Handle the event
     *
     * @param InvoiceHasBeenCreated $event
     */
    public function sendInvoiceToCustomer(InvoiceHasBeenCreated $event)
    {
        //
    }
}
