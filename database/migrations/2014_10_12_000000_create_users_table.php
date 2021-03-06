<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');

            $table->string('email')->unique();

            $table->string('password', 60);

            $table->date('birthday')->nullable();

            $table->string('telephone')->nullable();

            $table->string('mobile_phone')->nullable();

            $table->enum('sex', [ 'Male', 'Female' ])->nullable();

            $table->text('bio')->nullable();

            $table->rememberToken();

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
        Schema::drop('users');
    }
}
