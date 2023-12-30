<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "thumbnail"
    ];

    public $timestamps = false;

    public function product()
    {
        return $this->hasMany(Product::class);
    }

    public function order()
    {
        return $this->belongsToMany(Order::class, "category_order")->with("product");
    }
}
