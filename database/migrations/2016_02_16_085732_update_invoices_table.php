<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class UpdateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('invoices', function (Blueprint $table) {
            $table
                ->dropColumn('file_path');

            $table
                ->dropColumn('file_name');

            $table
                ->dropColumn('file_extension');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('invoices', function (Blueprint $table) {
            $table
                ->string('file_path');

            $table
                ->string('file_name');

            $table
                ->string('file_extension');
        });
    }
}
