<?php

namespace VividFinance;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Company
 *
 * @package VividFinance
 * @property-read \Illuminate\Database\Eloquent\Collection|\VividFinance\Invoice[] $invoices
 * @property integer $id
 * @property string $name
 * @property string $telephone
 * @property string $email
 * @property string $country
 * @property string $city
 * @property string $postcode
 * @property string $building_number
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
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

    /**
     * Method used to add an invoice to the company
     *
     * @param Invoice $invoice The given invoice
     *
     * @return Model
     */
    public function addInvoice(Invoice $invoice)
    {
        return $this->invoices()->save($invoice);
    }
}
