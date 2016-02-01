<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(VividFinance\User::class, function (Faker\Generator $faker) {
    return [
        'name'           => $faker->name,
        'email'          => $faker->email,
        'password'       => bcrypt(str_random(10)),
        'birthday'       => $faker->date('Y-m-d', '-18years'),
        'telephone'      => $faker->phoneNumber,
        'sex'            => $faker->randomElement(['male', 'female']),
        'bio'            => $faker->paragraph(),
        'remember_token' => str_random(10)
    ];
});

$factory->define(VividFinance\Company::class, function (Faker\Generator $faker) {
    return [
        'name'            => $faker->company,
        'telephone'       => $faker->phoneNumber,
        'email'           => $faker->companyEmail,
        'country'         => $faker->country,
        'city'            => $faker->city,
        'postcode'        => $faker->postcode,
        'building_number' => $faker->buildingNumber
    ];
});

$factory->define(VividFinance\Invoice::class, function (Faker\Generator $faker) {
    return [
        'title'           => $faker->title,
        'state'           => $faker->randomElement(['open', 'closed']),
        'file'            => '/public/invoices/' . $faker->slug . '.' . $faker->fileExtension,
        'file_path'       => '/public/invoices',
        'file_name'       => $faker->slug,
        'file_extension'  => $faker->fileExtension,
        'expiration_date' => $faker->dateTimeBetween('+1 month', '+2 months')
    ];
});
