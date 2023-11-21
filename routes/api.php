<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ScategorieController;
use App\Http\Controllers\CategorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::resource('categories', CategorieController::class);
});

Route::middleware('api')->group(function () {
    Route::resource('scategories', ScategorieController::class);
});

Route::get('/scat/{idcat}',[ScategorieController::class, 'showSCategorieByCAT']
);

Route::middleware('api')->group(function () {
    Route::resource('articles', ArticleController::class);
});