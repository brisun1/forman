<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;
//use App\Mail\NewUserWelcome;
use App\Mail\ContactMail;
class MailController extends Controller
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
        $message=$request->input('message');
        $sender=$request->input('sender');
        // $from=auth()->user()->email;
        
        
        //Mail::to('chinesedriver.com@gmail.com')->send(new ContactMail('contactus',$message,$name,$sender));
        Mail::to('chinesedriver.com@gmail.com')->send(new ContactMail($message,$name,$sender));
        
         return redirect('/');
    }
}
