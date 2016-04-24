<?php

namespace VividFinance;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use VividFinance\Traits\Filterable;

/**
 * VividFinance\Invoice
 *
 * @property integer                     $id
 * @property integer                     $customer_id
 * @property string                      $title
 * @property string                      $state
 * @property string                      $file
 * @property \Carbon\Carbon              $expiration_date
 * @property \Carbon\Carbon              $created_at
 * @property \Carbon\Carbon              $updated_at
 * @property boolean                     $is_recurrent
 * @property string                      $recurrence
 * @property-read \VividFinance\Customer $customers
 * @property-read \VividFinance\User     $user
 * @method static Builder|Invoice notPayed()
 * @method static Builder|Invoice whereId( $value )
 * @method static Builder|Invoice whereCustomerId( $value )
 * @method static Builder|Invoice whereTitle( $value )
 * @method static Builder|Invoice whereState( $value )
 * @method static Builder|Invoice whereFile( $value )
 * @method static Builder|Invoice whereExpirationDate( $value )
 * @method static Builder|Invoice whereCreatedAt( $value )
 * @method static Builder|Invoice whereUpdatedAt( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereIsRecurrent( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice whereRecurrence( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice filtered( $filters )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Invoice filter( $filters )
 * @mixin \Eloquent
 */
class Invoice extends Model
{

    use Filterable;

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
     * The scope which will filter the invoices that are not payed
     *
     * @param $query Builder The old query
     *
     * @return mixed The new query
     */
    public function scopeNotPayed(Builder $query)
    {
        return $query->where('state', 'open')->where('expiration_date', '<=', date('Y-m-d', strtotime('+1 week')));
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


    /**
     * Method used to retrieve the full file path
     *
     * @return string
     */
    public function getFullFile()
    {
        return $this->getFilePath() . '/' . $this->file;
    }
}