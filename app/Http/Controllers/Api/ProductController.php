<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function list(Request $request)
    {
        $product = Product::query();

        // $product->with('category')->having([$request->categories]);
        

        $product->with('price')->whereHas('price', function ($q) use ($request) {
            $q->where('base_price', '>', $request->price[0]);
            $q->where('base_price', '<', $request->price[1]);
        });

        // // Sort
        // if ($request->has('sort') && $request->sort == "Decrease By Price") {
        //     $product->join('prices', 'products.id', '=', 'prices.product_id')->orderByDesc('prices.base_price')->select('products.*');
        // }

        // if ($request->has('sort') && $request->sort == "Increase By Price") {
        //     $product->join('prices', 'products.id', '=', 'prices.product_id')->orderBy('prices.base_price')->select('products.*');
        // }

        // if ($request->has('sort') && $request->sort == "Latest") {
        //     $product->latest();
        // }

        return ProductResource::collection($product->paginate(9));
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Client/ShopProductPage/ShopProductPage', [
            "product" => new ProductResource($product)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
