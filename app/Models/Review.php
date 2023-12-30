<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        "rating",
        "comment",
        "user_id",
        "product_id"
    ];

    public function Product(){
        return $this->belongsTo(Product::class);
    }

    public function User(){
        return $this->belongsTo(User::class);
    }
}
