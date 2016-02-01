<?php

namespace VividFinance;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Class User
 * @package VividFinance
 */
class User extends Authenticatable
{
    use Authorizable, CanResetPassword;
    /**
     * The name of the database table
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'birthday'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token'
    ];

    /**
     * The attributes that are dates
     *
     * @var array
     */
    protected $dates = [
        'birthday'
    ];
}
