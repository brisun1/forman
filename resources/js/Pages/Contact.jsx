import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
function Contact() {
    const [values, setValues] = useState({
        name: "",
        sender: "",
        message: "",
    });
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();

        Inertia.post("contact", values);
        // const name = this._name.input;
        // const sender = this._sender.input;
        // const message = this._message.input;
        //send em
        // const data = [name, sender, message];
        // axios
        //     .post("api/sendMail", data, {
        //         baseURL: "/",
        //         // params: {
        //         //     _method: "PUT"
        //         // }
        //     })

        //     .then((res) => {
        //         console.log("email" + res.data);
        //     });
        //}
    }

    return (
        <div className="container">
            <h5 className="d-flex justify-content-center">Contact Us</h5>
            <br />
            <h6>Our contact detail:</h6>
            <hr />
            <p>Phone: +353-874146903</p>
            <p>Email: info@forman.ie</p>
            <br />
            <h6>Email us now:</h6>
            <hr />
            <div className="col-12 col-md-6">
                <form
                    className="form-horizontal"
                    onSubmit={handleSubmit}
                    // method="POST"
                    // action="{{ action('HelpsController@email') }}"
                >
                    <div className="form-group form-inline">
                        <label htmlFor="Name">Company/Individual Name： </label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="ename"
                            //ref={this.input}
                            value={values.name}
                            // ref={(input) => (this._name = input)}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                    </div>

                    <div className="form-group form-inline">
                        <label htmlFor="sender">Phone No./Email: </label>
                        <input
                            name="sender"
                            type="text"
                            className="form-control"
                            id="sender"
                            //ref={(input) => (this._sender = input)}
                            value={values.sender}
                            onChange={handleChange}
                            placeholder="Phone/Email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message: </label>
                        <textarea
                            name="message"
                            type="text"
                            rows="10"
                            className="form-control luna-message"
                            id="help_msg"
                            // ref={(input) => (this._message = input)}
                            // ref={this.input}
                            value={values.message}
                            onChange={handleChange}
                            placeholder=""
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            //value="Send"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// <div class="col-12 col-md-6">
// 	<form class="form-horizontal" method="POST" action="{{ action('HelpsController@email') }}">
// 		{{ csrf_field() }}
// 		<div class="form-group form-inline">
// 		<label for="Name">姓名： </label>
// 		<input type="text" class="form-control" id="ename" value="{{$ename}}" placeholder="{{$ename}}" name="name" required>
// 	</div>

// 	<div class="form-group form-inline">
// 		<label for="sender">Email或电话: </label>
// 		<input type="text" class="form-control" id="sender" value="{{$email}}" placeholder="{{$email}}" name="sender" required>
// 	</div>

// 	<div class="form-group">
// 		<label for="message">内容: </label>
// 		<textarea type="text" rows="12" class="form-control luna-message" id="help_msg" placeholder="" name="message" required></textarea>
// 	</div>

// 		<div class="form-group">
// 			<button type="submit" class="btn btn-primary" value="Send">发送Email</button>
//         </div>

// 	</form>
// </div>

export default Contact;
