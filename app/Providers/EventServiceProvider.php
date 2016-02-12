<?php

namespace VividFinance\Providers;

use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'VividFinance\Events\CustomerHasBeenCreated' => [
        ],
        'VividFinance\Events\InvoiceHasBeenCreated' => [
            'VividFinance\Listeners\Email@sendInvoiceToAdmin',
            'VividFinance\Listeners\Email@sendInvoiceToCustomer'
        ],
    ];

    /**
     * Register any other events for your application.
     *
     * @param  \Illuminate\Contracts\Events\Dispatcher  $events
     * @return void
     */
    public function boot(DispatcherContract $events)
    {
        parent::boot($events);

        //
    }
}
