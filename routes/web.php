<?php
use App\Http\Controllers\Api\ChatController;

require __DIR__ . '/auth.php';
require __DIR__ . '/client.php';
require __DIR__ . '/admin.php';

Route::get("/chat", [ChatController::class, "show"])->name("chat.show");
Route::get("/chat/message", [ChatController::class, "sendMessage"])->name("chat.message");