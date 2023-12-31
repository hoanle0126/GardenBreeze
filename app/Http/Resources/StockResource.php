<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StockResource extends JsonResource
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
        return [
            "id" => $this->id,
            "product" => $this->product,
            "quantity" => $this->quantity,
            "status" => $this->status,
            "avg_rating" => $this->avg_rating
        ];
    }
}
