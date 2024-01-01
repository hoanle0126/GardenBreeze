<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Client/PaymentPage/PaymentPage");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $total = 0;
        $order = Order::create([
            'user_id' => $request->User()->id,
            'status' => 'Pending',
            'total' => $total
        ]);
        $products = $request->products;
        foreach ($products as $product) {
            $order->product()->attach(Product::find($product['id']), [
                'quantity' => $product['pivot']['quantity'],
                'category_id' => $product['category_id']
            ]);
            $total += $product['price']['base_price'] * $product['pivot']['quantity'];
            $cart = Cart::query()->where('user_id', $request->user()->id)->first();
            $cart->Product()->detach($product['id']);
        }
        $order->update([
            'total' => $total
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
