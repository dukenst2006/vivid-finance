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
            $table->increments('id')->unsigned();

            $table->integer('customer_id')->unsigned();

            $table->foreign('customer_id')->references('id')->on('customers');

            $table->string('title');

            $table->enum('state', [ 'open', 'closed' ]);

            $table->string('file')->nullable();

            $table->string('file_path')->nullable();

            $table->string('file_name')->nullable();

            $table->string('file_extension')->nullable();

            $table->date('expiration_date');

            $table->timestamps();
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
