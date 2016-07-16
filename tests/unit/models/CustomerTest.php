<?php
namespace VividFinance\Tests\Unit\Models;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use VividFinance\Customer;
use VividFinance\Invoice;
use VividFinance\Tests\TestCase;

class CustomerTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    function it_has_a_name()
    {
        $customer = new Customer([
            'name' => 'test customer'
        ]);

        $this->assertEquals('test customer', $customer->name);
    }

    /** @test */
    function it_has_a_telephone()
    {
        $customer = new Customer([
            'telephone' => '+31 06 112 332 12'
        ]);

        $this->assertEquals('+31 06 112 332 12', $customer->telephone);
    }

    /** @test */
    function it_has_an_email()
    {
        $customer = new Customer([
            'email' => 'info@test-customer.com'
        ]);

        $this->assertEquals('info@test-customer.com', $customer->email);
    }

    /** @test */
    function it_has_a_city()
    {
        $customer = new Customer([
            'city' => 'Arnhem'
        ]);

        $this->assertEquals('Arnhem', $customer->city);
    }

    /** @test */
    function it_has_a_country()
    {
        $customer = new Customer([
            'country' => 'The Netherlands'
        ]);

        $this->assertEquals('The Netherlands', $customer->country);
    }

    /** @test */
    function it_has_a_postcode()
    {
        $customer = new Customer([
            'postcode' => '6622AL'
        ]);

        $this->assertEquals('6622AL', $customer->postcode);
    }

    /** @test */
    function it_has_a_building_number()
    {
        $customer = new Customer([
            'building_number' => '1'
        ]);

        $this->assertEquals('1', $customer->building_number);
    }

    /** @test */
    function it_has_multiple_invoices()
    {
        $customer = new Customer([
            'name' => 'Test Customer'
        ]);
        $customer->save();

        $invoice_1 = new Invoice([
            'title' => 'Invoice #1'
        ]);

        $invoice_2 = new Invoice([
            'title' => 'Invoice #2'
        ]);

        $invoice_3 = new Invoice([
            'title' => 'Invoice #3'
        ]);

        $customer->addInvoice($invoice_1);
        $customer->addInvoice($invoice_2);
        $customer->addInvoice($invoice_3);

        $this->assertCount(3, $customer->invoices);
    }
}