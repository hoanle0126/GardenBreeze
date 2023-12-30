<?php

namespace App\Models;

use App\Events\User\UserCreated;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'role_id',
        'phone',
        'address'
    ];

    protected $dateFormat = 'Y-m-d H:i:s';

    public static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            $user->id = strtoupper(random_int(0, 999999));
        });
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime:d-m-Y',
        'password' => 'hashed',
        'created_at' => 'datetime:d-m-Y',
        'updated_at' => 'datetime:d-m-Y',
    ];

    public function cart()
    {
        return $this->hasOne(Cart::class)->with("product");
    }

    public function review()
    {
        return $this->hasMany(Review::class)->with("product");
    }

    public function otp()
    {
        return $this->hasOne(Otp::class);
    }

    public function order()
    {
        return $this->hasMany(Order::class)->with("product");
    }
}
