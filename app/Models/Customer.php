<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

/**
 * Class Customer
 * @package App\Models
 */
class Customer extends Model
{

    use Searchable;

    /**
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
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
