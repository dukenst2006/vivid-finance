<?php

namespace VividFinance;

use Gravatar;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use VividFinance\Traits\Filterable;

/**
 * VividFinance\User
 *
 * @property integer                   $id
 * @property string                    $name
 * @property string                    $email
 * @property string                    $password
 * @property \Carbon\Carbon            $birthday
 * @property string                    $telephone
 * @property string                    $mobile_phone
 * @property string                    $sex
 * @property string                    $bio
 * @property string                    $remember_token
 * @property string                    $api_token
 * @property \Carbon\Carbon            $created_at
 * @property \Carbon\Carbon            $updated_at
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereId( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereName( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereEmail( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User wherePassword( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereBirthday( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereTelephone( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereMobilePhone( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereSex( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereBio( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereRememberToken( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereCreatedAt( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereUpdatedAt( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User whereApiToken( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User filtered( $filters )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\User filter( $filters )
 * @mixin \Eloquent
 */
class User extends Authenticatable
{

    use Authorizable, CanResetPassword, Filterable;

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
        'birthday',
        'website',
        'telephone',
        'mobile_phone',
        'sex',
        'bio'
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

    /**
     * Get the Gravatar
     *
     * @return string
     */
    public function getAvatarAttribute()
    {
        return Gravatar::src($this->email);
    }
}
