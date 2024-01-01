<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use App\Models\Revenue;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redirect;
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
            $total += (($product['price']['base_price'] + ($product['price']['base_price'] * $product['price']['sales'] / 100)) * $product['pivot']['quantity']);
            $cart = Cart::query()->where('user_id', $request->user()->id)->first();
            $cart->Product()->detach($product['id']);
            $stock = Stock::query()->where('product_id', $product['id'])->first();
            $stock->update([
                'quantity' => $stock->quantity - $product['pivot']['quantity']
            ]);
            $revenue = Revenue::query()->where('product_id', $product['id'])->first();
            $revenue->update([
                'revenue' => $revenue->revenue + ($product['price']['base_price'] + $product['price']['base_price'] * $product['price']['sales'] / 100) * $product['pivot']['quantity'],
                'quantity' => $revenue->quantity + $product['pivot']['quantity']
            ]);
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
    public function submit(Order $order)
    {
        $order->update([
            "status" => "Completed"
        ]);
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
