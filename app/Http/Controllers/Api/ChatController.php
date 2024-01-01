<?php

namespace App\Http\Controllers\Api;

use App\Events\AuthEvent;
use App\Http\Controllers\Controller;
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
        broadcast(new AuthEvent($request->user(), $request->message));
    }
}
