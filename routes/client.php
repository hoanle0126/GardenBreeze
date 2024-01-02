<?php

use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\OrderController;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Order;
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


Route::middleware(["auth", "role:Client","verified"])->group(function () {
    Route::resource("/cart", CartController::class);
    Route::resource("/payment", OrderController::class);
    Route::post("/payment", [OrderController::class, "store"])->name("order.store");
    Route::post("/cart/{product}", [CartController::class, "create"]);
    Route::post("/cart-delete/{product}", [CartController::class, "destroy"]);
    Route::get("/order",[ClientController::class,"order"])->name("client.order");
    Route::delete("/order/{orderId}",[ClientController::class,"deleteOrder"])->name("client.orderDelete");
    Route::get("/profile",function(){
        return Inertia::render("Client/ProfilePage/ProfilePage");
    })->name("client.edit");
    Route::put("/profile",[ClientController::class,"update"])->name("client.update");
    Route::post("/reviews",[ReviewController::class,"store"])->name("reviews.store");
});