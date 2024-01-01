<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request){
        Review::create([
            "rating" => $request->rating,
            "comment" => $request->comment,
            "user_id" => $request->user()->id,
            "product_id" => $request->product,
        ]);
    }
}
