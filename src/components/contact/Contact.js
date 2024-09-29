import React from "react";
import "./Contact.css";

const Contact = () => {
    
    return (
        <section className="contact section" id="contact">
            <h1 className="section-title">Contact</h1>
            <span className="section-subtitle">Let's get in touch</span>

            <div className="contact-container container grid">
                <div className="contact-card">
                    <i className="fa-solid fa-envelope contact-icon"></i>
                    <h3 className="contact-card-title">Email:</h3>
                    <a href="mailto:alisondang61@gmail.com.com" className="contact-card-data">alisondang61@gmail.com</a>

                    {/* <a href="mailto:alisondang61@gmail.com.com" className="contact-button">Write Me {" "} </a> */}
                </div>

                <div className="contact-card">
                    <i class="fa fa-mobile-screen-button contact-icon"></i>

                    <h3 className="contact-card-title">Phone:</h3>
                    <a href="tel:2067248576" className="contact-card-data">(206) 724-8576</a>

                    {/* <a href="mailto:alisondang61@gmail.com" className="contact-button">Contact Me {" "} </a> */}
                </div>

                <div className="contact-card">
                    <i className="fa-brands fa-linkedin contact-icon"></i>

                    <h3 className="contact-card-title">LinkedIn:</h3>
                    <a href="https://www.linkedin.com/in/chidang0803" className="contact-card-data">Chi Dang</a>
                </div>
            </div>

        </section>
    )
}

export default Contact;