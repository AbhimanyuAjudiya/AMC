import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const EMAIL_JS_PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

function Contact() {

    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        let formEmpty = false;
        formData.forEach((value) => {
            if (!value) {
                formEmpty = true;
            }
        });

        if (formEmpty) {
            toast.error("Please fill in all fields.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        } 

        setLoading(true);

        emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, EMAIL_JS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            console.log("Email sent successfully!");
            toast.success("Email sent successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        })
        .catch((error) => {
            console.log(error.text);
            toast.error("Error sending email. Please try again later.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        })
        .finally(() => {
            setLoading(false);
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
                        <button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                            <ToastContainer />  
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
