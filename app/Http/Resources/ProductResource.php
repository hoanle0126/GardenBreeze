<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function __construct($resource)
    {
        parent::__construct($resource);

        $this->withoutWrapping();
    }
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $this->withoutWrapping();
        return [
            'id' => $this->id,
            'name'=> $this->name,
            'description'=> $this->description,
            'category' => $this->category,
            'price' => $this->price,
            'thumbnail' => $this->thumbnail,
            'images'=> $this->image,
            'stock'=>$this->stock,
            'feature' => $this->feature,
            'review' => $this->reviews,
            'avg_rating' => $this->avg_rating,
            'created_at' => $this->created_at,
        ];
    }
}
