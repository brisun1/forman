<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class PagesController extends Controller
{
    public function homee()
    {
        // return view('user.profile', [
        //     'user' => User::findOrFail($id)
        // ]);
        //the component name must be in /js/coponent/Pages
        //which Pages is defined in app.js
        return Inertia::render('HomeContent', [
            'bar' => "Hello World",
         ]);
    }

}
