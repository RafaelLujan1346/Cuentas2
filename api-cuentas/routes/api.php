<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TransactionController;

//ENDPONIT
Route::resource('accounts',AccountsController::class);
Route::resource('category',CategoryController::class);
Route::resource('transaction',TransactionController::class);
Route::post('changestatus',[AccountsController::class,'changeStatus']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
