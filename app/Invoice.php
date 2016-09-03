<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

/**
 * Class Invoice
 * @package App
 */
class Invoice extends Model
{

    use Searchable;

    /**
     * @var array
     */
    protected $fillable = [
        'title',
        'state',
        'expiration_date'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'expiration_date'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
