<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model {
    use HasFactory;

    protected $fillable = [
        "user_id",
        "status",
        "total"
    ];

    protected $attributes = [
        'total' => "1"
    ];

    protected $dateFormat = 'Y-m-d H:i:s';

    public static function boot() {
        parent::boot();

        static::creating(function ($user) {
            $user->id = strtoupper(random_int(0, 999999));
        });
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function product() {
        return $this->belongsToMany(Product::class, "order_product")->with('price')->withPivot('quantity');
    }

    public function category(){
        return $this->belongsToMany(Category::class,"order_product");
    }
}
