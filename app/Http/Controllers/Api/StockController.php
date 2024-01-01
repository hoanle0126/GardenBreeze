<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Http\Resources\StockResource;
use App\Models\Category;
use App\Models\Product;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render("Admin/StocksPage/StockPage", [
            "stocks" => StockResource::collection(Stock::all())
        ]);
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
    }

    /**
     * Display the specified resource.
     */
    public function show($product)
    {
        return Inertia::render("Admin/StocksPage/View/index", [
            "categories" => Category::all(),
            "product" => new ProductResource(Product::find($product))
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stock $stock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'thumbnail' => $request->thumbnail,
            'category_id' => $request->category['id']
        ]);

        $images = $request->get('images');

        $product->Image()->delete();

        if ($images) {
            foreach ($images as $image) {
                $product->Image()->create([
                    'src' => $image['src'],
                ]);
            }
        }

        $product->Price()->update([
            'base_price' => $request->price['base_price'],
            'sales' => $request->price['sales'],
        ]);

        if ($request->feature) {
            $product->Feature()->update([
                'common_name' => $request->feature['common_name'],
                'science_name' => $request->feature['science_name'],
                'plant_family' => $request->feature['plant_family'],
                'source' => $request->feature['source'],
            ]);
        }

        $stock = $request->stock;
        if ($stock) {
            $product->Stock()->update([
                'quantity' => $stock['quantity'],
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
        } else {
            $product->Stock()->update([
                'status' => 'Low Stock',
            ]);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
