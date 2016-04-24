<?php

namespace VividFinance;

use Illuminate\Database\Eloquent\Model;
use VividFinance\Traits\Filterable;

/**
 * VividFinance\Customer
 *
 * @property integer                                                               $id
 * @property string                                                                $name
 * @property string                                                                $telephone
 * @property string                                                                $email
 * @property string                                                                $country
 * @property string                                                                $city
 * @property string                                                                $postcode
 * @property string                                                                $building_number
 * @property \Carbon\Carbon                                                        $created_at
 * @property \Carbon\Carbon                                                        $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\VividFinance\Invoice[] $invoices
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer whereId( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer whereName( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer whereTelephone( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer whereEmail( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer whereCountry( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer whereCity( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer wherePostcode( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer whereBuildingNumber( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer whereCreatedAt( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer whereUpdatedAt( $value )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer filtered( $filters )
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Customer filter( $filters )
 * @mixin \Eloquent
 */
class Customer extends Model
{

    use Filterable;

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
     * Method used to add an invoice to the company
     *
     * @param Invoice $invoice The given invoice
     *
     * @return Model The invoice
     */
    public function addInvoice(Invoice $invoice)
    {
        return $this->invoices()->save($invoice);
    }


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
