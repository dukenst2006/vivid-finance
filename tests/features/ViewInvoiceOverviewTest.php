<?php

use App\Invoice;
use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ViewInvoiceOverviewTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_can_view_an_overview_of_invoices()
    {
        $user = factory(User::class)->create();
        $invoice = factory(Invoice::class)->make([
            'title' => 'My invoice'
        ]);
        $user->invoices()->save($invoice);

        $this->visit("/api/v1/invoices")
            ->see('My invoice');
    }
}
