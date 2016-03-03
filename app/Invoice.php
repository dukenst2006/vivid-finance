<?php

namespace VividFinance;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

/**
 * VividFinance\Invoice
 *
 * @property integer $id
 * @property integer $customer_id
 * @property string $title
 * @property string $state
 * @property string $file
 * @property \Carbon\Carbon $expiration_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \VividFinance\Customer $customers
 * @property-read \VividFinance\User $user
 * @method static Builder|\VividFinance\Invoice notPayed()
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereCustomerId($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereTitle($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereState($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereFile($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereExpirationDate($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereUpdatedAt($value)
 * @mixin \Eloquent
 * @mixin \Eloquent
 */
class Invoice extends Model
{
    /**
     * The name of the database table
     *
     * @var string
     */
    protected $table = 'invoices';

    /**
     * The attributes that are mass assignable
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'state',
        'expiration_date'
    ];

    /**
     * The attributes that are dates
     *
     * @var array
     */
    protected $dates = [
        'expiration_date'
    ];

    /**
     * An invoice belongs to a customer
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo The company
     */
    public function customers()
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * An invoice belongs to an user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo The user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The scope which will filter the invoices that are not payed
     *
     * @param $query Builder The old query
     *
     * @return mixed The new query
     */
    public function scopeNotPayed(Builder $query)
    {
        return $query
            ->where('state', 'open')
            ->where('expiration_date', '<=', date('Y-m-d', strtotime('+1 week')));
    }

    /**
     * Method used to retrieve the path for the invoice
     *
     * @return string The file path
     */
    public function getFilePath()
    {
        return storage_path() . '/customers/' . $this->customer_id . '/invoices';
    }
}
