<?php

use Illuminate\Database\Seeder;
use VividFinance\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User([
            'name' => 'Test',
            'email' => 'test@test.nl',
            'password' => bcrypt('Test@123')
        ]);
        $user->save();
    }
}
