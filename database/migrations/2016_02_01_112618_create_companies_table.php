<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table
                ->increments('id')
                ->unsigned();

            $table
                ->string('name');

            $table
                ->string('telephone')
                ->nullable();

            $table
                ->string('email')
                ->nullable();

            $table
                ->string('country')
                ->nullable();

            $table
                ->string('city')
                ->nullable();

            $table
                ->string('postcode')
                ->nullable();

            $table
                ->string('building_number')
                ->nullable();

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
        Schema::drop('companies');
    }
}
