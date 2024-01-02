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

class MessageEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;
    public $user_receive;
    public $message;
    /**
     * Create a new event instance.
     */
    public function __construct($user,$user_receive,$message)
    {
        $this->user = $user;
        $this->user_receive = $user_receive;
        $this->message = $message;
    }

    public function broadcastOn()
    {
        return new Channel('chat.message');
    }
}
