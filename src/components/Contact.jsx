import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7eny96c', 'template_v8kt3fc', form.current, '0NCAtG34JkW719ZYe')
        .then((result) => {
            console.log(result.text);
            console.log("Email sent successfully!");
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="sub_page">
        <section className="contact_section layout_padding">
            <div className="container">
            <div className="heading_container">
                <h2>Get In touch</h2>
            </div>
            <div className="">
                <div className="row">
                <div className="col-md-6 ">
                    <form ref={form} onSubmit={sendEmail} action="">
                    <div className="contact_form-container">
                        <div>
                        <div>
                            <input type="text" name='user_name' placeholder="Full Name" />
                        </div>
                        <div>
                            <input type="email" name='user_email' placeholder="Email " />
                        </div>
                        <div>
                            <input type="text" name='user_phone_number' placeholder="Phone Number" />
                        </div>
                        <div className="">
                            <input
                            type="text"
                            placeholder="Message"
                            className="message_input"
                            name='user_message'
                            />
                        </div>
                        <div className=" ">
                            <button type="submit">Send</button>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="img-box">
                    <img src="images/map.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
}

export default Contact;
