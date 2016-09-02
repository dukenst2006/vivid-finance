<?php

use App\Invoice;
use App\User;
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
        $user = User::first();

        $invoices = collect(factory(Invoice::class, 10)->make());

        $invoices->each(function ($invoice) use ($user) {
            $user->invoices()->save($invoice);
        });
    }
}
