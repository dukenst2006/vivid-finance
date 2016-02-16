<?php

namespace VividFinance;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * VividFinance\User
 *
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property \Carbon\Carbon $birthday
 * @property string $telephone
 * @property string $mobile_phone
 * @property string $sex
 * @property string $bio
 * @property string $remember_token
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
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
