<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Otp extends Model
{
    use HasFactory;

    protected $fillable = [
        'otp',
        'user_id'
    ];
    protected $casts = [
        'date_added' => 'datetime:d-m-Y',
        'date_modified' => 'datetime:d-m-Y',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
