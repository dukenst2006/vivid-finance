<?php

namespace VividFinance\Tests\Unit\Models;

use Carbon\Carbon;
use Hash;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use VividFinance\Tests\TestCase;
use VividFinance\User;

class UserTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_has_a_name()
    {
        $user = new User([
            'name' => 'Test user'
        ]);

        $this->assertEquals('Test user', $user->name);
    }

    /** @test */
    public function it_has_an_email()
    {
        $user = new User([
            'email' => 'test@test.nl'
        ]);

        $this->assertEquals('test@test.nl', $user->email);
    }

    /** @test */
    public function it_has_a_birthday()
    {
        $user = new User([
            'birthday' => Carbon::parse('07-02-1994')
        ]);

        $this->assertEquals(Carbon::parse('07-02-1994'), $user->birthday);
    }

    /** @test */
    public function it_has_a_password()
    {
        $password = Hash::make('Test@123');

        $user = new User([
            'password' => $password
        ]);

        $this->assertEquals($password, $user->password);
    }
}