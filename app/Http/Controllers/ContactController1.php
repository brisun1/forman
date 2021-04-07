<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;
//use App\Mail\NewUserWelcome;
use App\Mail\ContactMail;
class ContactController extends Controller
{
    
    public function sendMail(Request $request){
//         $to_name = ‘RECEIVER_NAME’;
// $to_email = ‘RECEIVER_EMAIL_ADDRESS’;
//$data = array(‘name’=>”Ogbonna Vitalis(sender_name)”, “body” => “A test mail”);
// Mail::send(‘emails.mail’, $data, function($message) use ($to_name, $to_email) {
// $message->to($to_email, $to_name)
// ->subject(Laravel Test Mail’);
// $message->from(‘SENDER_EMAIL_ADDRESS’,’Test Mail’);
//});
//return "test";
        $name=$request->input('name');
        $sender=$request->input('sender');
        $msg=$request->input('message');
        
        // $from=auth()->user()->email;
        
        
        //Mail::to('chinesedriver.com@gmail.com')->send(new ContactMail('contactus',$message,$name,$sender));
        Mail::to(['highlevelstructures@gmail.com','xu.forman@mail.com'])->send(new ContactMail($name,$sender,$msg));
        
         return Redirect::route('/contact');
    }
}
