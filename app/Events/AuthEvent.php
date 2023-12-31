<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Log;

class AuthEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;
    public $message;
    /**
     * Create a new event instance.
     */
    public function __construct(User $user, $message)
    {
        $this->user = $user;
        $this->message = $message;
    }

    public function broadcastOn()
    {
        \Log::debug("{$this->user->name}: {$this->message}");
        return new PresenceChannel("chat");
    }
}
