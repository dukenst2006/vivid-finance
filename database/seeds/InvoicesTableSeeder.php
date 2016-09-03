<?php

use App\Models\Customer;
use App\Models\Invoice;
use App\Models\User;
use Illuminate\Database\Seeder;

class InvoicesTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user     = User::first();
        $customer = Customer::first();

        $invoices = collect(factory(Invoice::class, 10)->make());

        $invoices->each(function ($invoice) use ($user, $customer) {
            $invoice->customer()->associate($customer);
            $user->invoices()->save($invoice);
        });
    }
}