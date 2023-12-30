<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    use HasFactory;

    protected $fillable = [
        'common_name',
        'science_name',
        'plant_family',
        'source'
    ];

    public $timestamps = false;

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
