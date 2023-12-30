<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create([
            'name' => 'Admin',
        ]);

        Role::create([
            'name' => 'Client',
        ]);

        Role::create([
            'name' => 'Shipper',
        ]);

        Role::create([
            'name' => 'Manager',
        ]);

        Role::create([
            'name' => 'Cashier',
        ]);

        $user = User::factory()->create([
            'name' => "Lê Văn Xuân Hoàn",
            "email" => "admin@gmail.com",
            "password" => "123"
        ]);

        $user->assignRole("Admin");
    }
}
