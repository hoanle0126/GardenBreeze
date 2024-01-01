<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function showCustomer($user)
    {
        return Inertia::render("Admin/Member/Customer/View/index", [
            "customer" => new UserResource(User::find($user))
        ]);
    }
}
