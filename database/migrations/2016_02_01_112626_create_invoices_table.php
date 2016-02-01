<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table
                ->increments('id')
                ->unsigned();

            $table
                ->integer('company_id')
                ->unsigned();

            $table
                ->foreign('company_id')
                ->references('id')
                ->on('companies');

            $table
                ->string('title');

            $table
                ->enum('state', ['open', 'closed']);

            $table
                ->string('file');

            $table
                ->string('file_path');

            $table
                ->string('file_name');

            $table
                ->string('file_extension');

            $table
                ->date('expiration_date');

            $table
                ->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('invoices');
    }
}
