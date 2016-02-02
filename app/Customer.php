<?php

namespace VividFinance;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Company
 * @package VividFinance
 */
class Customer extends Model
{
    /**
     * The name of the database table
     *
     * @var string
     */
    protected $table = 'customers';

    /**
     * The attributes that are mass assignable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'telephone',
        'email',
        'country',
        'city',
        'postcode',
        'building_number'
    ];

    /**
     * An company has one or many invoices
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany The invoice collection
     */
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
