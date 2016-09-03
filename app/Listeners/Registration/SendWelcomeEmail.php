<?php

namespace App\Listeners\Registration;

use App\Events\User\Registered;
use App\Mail\Registration\Welcome;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;

class SendWelcomeEmail implements ShouldQueue
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
     * @param  Registered $event
     *
     * @return void
     */
    public function handle(Registered $event)
    {
        Mail::to($event->user->email)->send(new Welcome($event->user));
    }
}
