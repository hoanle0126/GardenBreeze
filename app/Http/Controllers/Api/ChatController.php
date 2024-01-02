<?php

namespace App\Http\Controllers\Api;

use App\Events\AuthEvent;
use App\Events\MessageEvent;
use App\Events\PrivateMessageEvent;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function show()
    {
        return Inertia::render("Admin/ChatPage/ChatPage");
    }
    public function sendMessage(Request $request)
    {
        broadcast(new PrivateMessageEvent(User::find($request->user_receive), $request->message));
    }
}
