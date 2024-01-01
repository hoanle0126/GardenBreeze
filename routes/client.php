<?php

use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Client/LandingPage/LandingPage', [
        "categories" => Category::all(),
        "products" => ProductResource::collection(Product::all()),
    ]);
});

Route::get('/shop', function () {
    return Inertia::render('Client/ShopPage/ShopPage', [
        "test" => "tests",
        "categories" => Category::all(),
        "products" => ProductResource::collection(Product::all())
    ]);
});

Route::get('/shop/{product}', [ProductController::class, "show"]);

Route::get('/contact', function () {
    return Inertia::render('Client/ContactPage/ContactPage', [
        "categories" => Category::all(),
        "products" => ProductResource::collection(Product::all()),
    ]);
});

Route::middleware(["auth", "role:Client"])->group(function () {
    Route::resource("/cart", CartController::class);
    Route::resource("/payment", OrderController::class);
    Route::post("/payment", [OrderController::class, "store"])->name("order.store");
    Route::post("/cart/{product}", [CartController::class, "create"]);
    Route::get("/order",function(){
        return Inertia::render("Client/OrderPage/OrderPage");
    });
    Route::get("/profile",function(){
        return Inertia::render("Client/ProfilePage/ProfilePage");
    });
});