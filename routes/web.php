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
Route::get('/contactus', function () {
  return view('contactus');
});
Route::post('/sendMail', 'MailController@sendMail');
use Inertia\Inertia;

Route::get('/', function(){
  return Inertia::render('App');
});
Route::inertia('/homec', 'HomeContent');
Route::inertia('/employers', 'App');
//Route::get('/homee', 'App\Http\Controllers\PagesController@homee');
//Route::view('/{path?}', 'app');
//bellow working
Route::inertia('/{path?}', 'App');
// Route::get('/contactus', function () {
//     return view('contactus');
// });