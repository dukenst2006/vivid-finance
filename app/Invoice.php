<?php

namespace VividFinance;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Invoice
 *
 * @package VividFinance
 * @property-read \VividFinance\Customer $customers
 * @property-read \VividFinance\User $user
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice notPayed()
 * @property integer $id
 * @property integer $customer_id
 * @property string $title
 * @property string $state
 * @property string $file
 * @property string $file_path
 * @property string $file_name
 * @property string $file_extension
 * @property \Carbon\Carbon $expiration_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
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
        'file',
        'file_path',
        'file_name',
        'file_extension',
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
     * @param $query string The old query
     *
     * @return mixed The new query
     */
    public function scopeNotPayed($query)
    {
        return $query
            ->where('state', 'open')
            ->where('expiration_date', '<=', date('Y-m-d', strtotime('+1 week')));
    }
}
