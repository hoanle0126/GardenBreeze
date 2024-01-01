<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\StockResource;
use App\Http\Resources\UserResource;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\Stock;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class AnalyzeData extends Controller
{
    public function dashboard()
    {
        $categories = Category::with("product")->get();
        foreach ($categories as $category) {
            $category["revenues"] = $category['product']->sum("revenue.revenue");
        }
        $collection = new Collection($categories);
        $now = Carbon::now();

        $revenue = 0;
        $orders = OrderResource::collection(Order::query()->whereMonth('created_at', $now)->get());
        foreach ($orders as $order) {
            $total = 0;
            foreach ($order->product as $product) {
                $total += $product->price['base_price'];
            }
            $revenue += $total;
        }
        return Inertia::render('Admin/DashboardPage/DashboardPage', [
            'revenue' => ProductResource::collection(Product::all())->sum("revenue.revenue"),
            "first" => $collection->sortByDesc("revenues")->take(1)->values(),
            "second" => $collection->sortByDesc("revenues")->skip(1)->take(1)->values(),
            "other" => $collection->sortByDesc("revenues")->skip(2)->sum("revenues"),
            "listCustomer" => UserResource::collection(User::query()->whereMonth("created_at", Carbon::now('m'))->get()),
            "countOrder" => OrderResource::collection(Order::all()),
            "avgSelling" => [
                ["avg" => Order::query()->whereDate('created_at', Carbon::now()->subDays(6))->average("total")],
                ["avg" => Order::query()->whereDate('created_at', Carbon::now()->subDays(5))->average("total")],
                ["avg" => Order::query()->whereDate('created_at', Carbon::now()->subDays(4))->average("total")],
                ["avg" => Order::query()->whereDate('created_at', Carbon::now()->subDays(3))->average("total")],
                ["avg" => Order::query()->whereDate('created_at', Carbon::now()->subDays(2))->average("total")],
                ["avg" => Order::query()->whereDate('created_at', Carbon::now()->subDays(1))->average("total")],
                ["avg" => Order::query()->whereDate('created_at', $now)->average("total")],
            ],
            "sell" => [
                Order::query()->whereDate('created_at', Carbon::now()->subDays(6))->sum("total"),
                Order::query()->whereDate('created_at', Carbon::now()->subDays(5))->sum("total"),
                Order::query()->whereDate('created_at', Carbon::now()->subDays(4))->sum("total"),
                Order::query()->whereDate('created_at', Carbon::now()->subDays(3))->sum("total"),
                Order::query()->whereDate('created_at', Carbon::now()->subDays(2))->sum("total"),
                Order::query()->whereDate('created_at', Carbon::now()->subDays(1))->sum("total"),
                Order::query()->whereDate('created_at', $now)->sum("total")
            ],
            "delivery" => OrderResource::collection(Order::query()->where('status', "Delivering")->get()),
            "stocks" => StockResource::collection(Stock::all()),
            "categories" => CategoryResource::collection(Category::all())
        ]);
    }
}
