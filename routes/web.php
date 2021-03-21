<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

use Inertia\Inertia;

Route::get('/', function(){
  return Inertia::render('App');
});
//Route::inertia('/homec', '../Pages/HomeContent');
Route::get('/homee', 'App\Http\Controllers\PagesController@homee');