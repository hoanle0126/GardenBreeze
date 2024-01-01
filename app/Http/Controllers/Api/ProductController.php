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
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'thumbnail' => $request->thumbnail,
            'category_id' => $request->category['id']
        ]);

        $images = $request->get('images');

        if ($images) {
            foreach ($images as $image) {
                $product->Image()->create([
                    'src' => $image['src'],
                    'product_id' => $product->id
                ]);
            }
        }

        $product->Price()->create([
            'base_price' => $request->price['base_price'],
            'sales' => $request->price['sales'],
        ]);

        if ($request->feature) {
            $product->Feature()->create([
                'common_name' => $request->feature['common_name'],
                'science_name' => $request->feature['science_name'],
                'plant_family' => $request->feature['plant_family'],
                'source' => $request->feature['source'],
            ]);
        }

        $stock = $request->stock;
        if ($stock) {
            $product->Stock()->create([
                'quantity' => $stock['quantity'],
                'status' => "On Stock"
            ]);
        }
        if ($product->Stock()->first()['quantity'] >= 10) {
            $product->Stock()->update([
                'status' => 'On Stock',
            ]);
        } else if ($product->Stock()->first()['quantity'] == 0) {
            $product->Stock()->update([
                'status' => 'Out of Stock',
            ]);
        } else if ($product->Stock()->first()['quantity'] < 10) {
            $product->Stock()->update([
                'status' => 'Low Stock',
            ]);
        }

        return new ProductResource($product);
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
