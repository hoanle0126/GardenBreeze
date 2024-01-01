<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();
        $user = $request->user();
        $user->update([
            "name" => $request->name,
            "avatar" => $request->avatar,
            "phone" => $request->phone,
            "address" => $request->address
        ]);

        return Redirect::route('client.edit');
    }

    public function order(Request $request){
        return Inertia::render("Client/OrderPage/OrderPage",[
            "orders" => OrderResource::collection(Order::query()->where("user_id",$request->user()->id)->get())
        ]);
    }

    public function deleteOrder($orderId){
        $order = Order::find($orderId);
        $order->delete();
    }
}
