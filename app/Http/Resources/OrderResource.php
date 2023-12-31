<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'id' => $this->id,
            'user' => $this->user,
            'products' => $this->product,
            'status' => $this->status,
            'total' => $this->total,
            'date_added' => $this->created_at->format('d-m-Y'),
            'date_modified' => $this->updated_at->format('d-m-Y'),
        ];
    }
}
