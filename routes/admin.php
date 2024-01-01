<?php

use App\Http\Controllers\AnalyzeData;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\StockController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserResource;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', "role:Admin", "verified"])->group(function () {
    Route::get('/admin/dashboard', [AnalyzeData::class, "dashboard"])->name('dashboard');
    Route::get('/admin/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/admin/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/admin/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get("/admin/chat", function () {
        return Inertia::render("Admin/ChatPage/ChatPage");
    });
    Route::get("/admin/calendar", function () {
        return Inertia::render("Admin/CalendarPage/CalendarPage");
    });
    Route::get("/admin/categories", function () {
        return Inertia::render("Admin/CategoriesPage/CategoriesPage", [
            "categories" => Category::all()
        ]);
    });
    Route::get("/admin/categories-add", function () {
        return Inertia::render("Admin/CategoriesPage/Add/index", [
            "categories" => Category::all()
        ]);
    });
    Route::put("/categories/{category}", [CategoryController::class, "update"]);
    Route::get("/admin/categories-{category}", [CategoryController::class, "show"]);
    Route::post("/admin/categories-add", [CategoryController::class, "store"])->name('categories.store');
    Route::delete("categories-{category}", [CategoryController::class, "destroy"])->name('categories.destroy');
    Route::resource("/admin/stock", StockController::class);
    Route::get("/admin/order", function () {
        return Inertia::render("Admin/OrderPage/OrderPage", [
            "orders" => OrderResource::collection(Order::all())
        ]);
    })->name("order.list");
    Route::put("/admin/order-{order}", [OrderController::class,"submit"])->name("order.submit");
    Route::get("/admin/customer", function () {
        return Inertia::render("Admin/Member/Customer/index", [
            "customers" => UserResource::collection(User::all())
        ]);
    });
    Route::get("/admin/customer-{customer}", [UserController::class, "showCustomer"])->name("customer.show");
    Route::get("/admin/staff", function () {
        return Inertia::render("Admin/Member/Staff/index", [
            "customers" => UserResource::collection(User::all())
        ]);
    });
    Route::get("/admin/stock-add", function () {
        return Inertia::render("Admin/StocksPage/AddPage/AddProduct", [
            "categories" => Category::all()
        ]);
    });
    Route::get("/admin/stock-{product}", [StockController::class, "show"]);
    Route::put("/stock/edit/{product}", [StockController::class, "update"]);
    Route::delete("/stock/{product}", [StockController::class, "destroy"]);
});