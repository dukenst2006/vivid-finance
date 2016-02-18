<?php
namespace VividFinance\Tests\Unit\Models;

use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use VividFinance\Customer;
use VividFinance\Invoice;
use VividFinance\Tests\TestCase;

class InvoiceTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    function it_has_a_title()
    {
        $invoice = new Invoice([
            'title' => 'Example Invoice'
        ]);

        $this->assertEquals($invoice->title, 'Example Invoice');
    }

    /** @test */
    function it_has_an_expiration_date()
    {
        $invoice = new Invoice([
            'expiration_date' => Carbon::create(2015, 12, 22, 0, 0, 0)
        ]);

        $this->assertEquals($invoice->expiration_date, Carbon::create(2015, 12, 22, 0, 0, 0));
    }

    /** @test */
    function it_has_a_customer()
    {
        $customer = new Customer([
            'name' => 'Test Customer'
        ]);
        $customer->save();
        $invoice = new Invoice([
            'title' => 'Test Invoice'
        ]);

        $customer->addInvoice($invoice);

        $this->assertEquals($customer->id, $invoice->customer_id);
    }
}