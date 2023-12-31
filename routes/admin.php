<?php

use App\Http\Controllers\Api\StockController;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\OrderResource;
use App\Models\Category;
use App\Models\Order;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/DashboardPage/DashboardPage');
    })->name('dashboard');
    Route::get('/admin/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/admin/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/admin/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get("/admin/chat", function () {
        return Inertia::render("Admin/ChatPage/ChatPage");
    });
    Route::get("/admin/calendar", function () {
        return Inertia::render("Admin/CalendarPage/CalendarPage");
    });
    Route::get("/admin/categories", function () {
        return Inertia::render("Admin/CategoriesPage/CategoriesPage",[
            "categories" => Category::all()
        ]);
    });
    Route::resource("/admin/stock", StockController::class);
    Route::get("/admin/order", function () {
        return Inertia::render("Admin/OrderPage/OrderPage", [
            "orders" => OrderResource::collection(Order::all())
        ]);
    });
    Route::get("/admin/customer", function () {
        return Inertia::render("Admin/CategoriesPage/CategoriesPage");
    });
    Route::get("/admin/staff", function () {
        return Inertia::render("Admin/CategoriesPage/CategoriesPage");
    });
});