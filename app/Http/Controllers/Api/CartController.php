<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Client/CartPage/CartPage");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, Product $product)
    {
        $cart = Cart::query()->where('user_id', $request->user()->id)->first();

        $productElement = Product::find($product);
        $hasExists = $cart->Product()->where('product_id', $product->id)->exists();

        if (!$hasExists) {
            $cart->Product()->attach($productElement, [
                "quantity" => $request->quantity
            ]);
        } else {
            $qty = $cart->Product()->select("quantity")->where("product_id", $product->id)->first()->quantity;
            $cart->Product()->updateExistingPivot($product->id, ['quantity' => $qty + $request->quantity]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $cart = Cart::query()->where('user_id', $request->user()->id)->first();

        $productElement = Product::find($request->product);
        $hasExists = $cart->Product()->where('product_id', $productElement->id)->exists();

        if (!$hasExists) {
            $cart->Product()->attach($productElement, [
                "quantity" => $request->quantity
            ]);
        } else {
            $qty = $cart->Product()->select("quantity")->where("product_id", $productElement->id)->first()->quantity;
            $cart->Product()->updateExistingPivot($productElement->id, ['quantity' => $qty + $request->quantity]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, Request $request)
    {
        $cart = Cart::query()->where('user_id', $request->user()->id)->first();

        $cart->Product()->detach($product);
    }
}
