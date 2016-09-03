<?php

namespace App\Mail\Registration;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

/**
 * Class Welcome
 * @package App\Mail\Registration
 */
class Welcome extends Mailable
{

    use Queueable, SerializesModels;

    /**
     * @var string
     */
    protected $subject = 'Welcome to Vivid Finance';

    /**
     * @var User
     */
    public $user;


    /**
     * Create a new message instance.
     *
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }


    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.registration.welcome');
    }
}
