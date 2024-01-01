<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
        $revenue = $this->product->sum('revenue.revenue');
        $this->revenue = $revenue;
        return [
            "id" => $this->id,
            "name" => $this->name,
            "thumbnail" => $this->thumbnail,
            "product" => $this->product,
            "revenue" => $this->revenue
        ];
    }
}
