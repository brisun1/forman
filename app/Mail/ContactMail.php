<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;
    
    public $name;
    //public $topic;
    public $sender;
    public $msg;
    /**
     * Create a new msg instance.
     *
     * @return void
     */
    
    public function __construct($name,$sender,$msg)
    {
        $this->name=$name;
        $this->sender=$sender;
        $this->msg=$msg;
        

        //subject is built-in property of email class i presume
        //$this->subject('99 meimei.com');
    }
    /**
     * Build the msg.
     *
     * @return $this
     */
    public function build()
    {
        //original
        //return $this->view('view.name');
        //copied from nevertouch
        // return $this->markdown('email.'.$this->content)->with('sender', $this->sender)

        //->with('ename', $this->ename)->with('topic', $this->topic);
        return $this->from('example@example.com')
                ->view('emailFromWeb')
                ->with([
                    'name' => $this->name,
                    'sender'=>$this->sender,
                    'msg' => $this->msg,
                    
                ]);
    }
}
