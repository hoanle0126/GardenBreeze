<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::with("product")->get();
        foreach ($categories as $category) {
            $category["revenues"] = $category['product']->sum("revenue.revenue"); 
        }
        $collection = new Collection($categories);
        return [
            "first" => $collection->sortByDesc("revenues")->take(1)->values(),
            "second" => $collection->sortByDesc("revenues")->skip(1)->take(1)->values(),
            "other" => $collection->sortByDesc("revenues")->skip(2)->sum("revenues"),
        ];
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
        $category = Category::create([
            'name' => $request->name,
            'thumbnail' => $request->thumbnail
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return Inertia::render("Admin/CategoriesPage/View/index", [
            "category" => $category
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $category->update([
            'name' => $request->name,
            'thumbnail' => $request->thumbnail,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
    }
}
