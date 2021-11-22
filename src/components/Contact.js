import React from 'react'
import { useForm } from 'react-hook-form'
import '../contact.css'
import { FaLinkedin, FaInstagram } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
export default function Contact() {
    function sentEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_lea9dbc", "template_fau7tb5", e.target, "user_kI9aX6F52ltnq870VasIL").then(res => {
            console.log("Thank you for sending email");
        }).catch(err => console.log(err));

    }

    return (
        <><section className="section4" id="part4">
            <div className="container contact">

                <div className="container contact_heading_container">
                    <h4 className="contactheading">CONTACT</h4>
                    <h3>Say Hello.</h3>
                    <p>Submit the form below so i can get back to you as soon as possible</p>
                </div>
                <div className="container  contact_container2">
                    <div className="container form">
                        <form onSubmit={sentEmail}>
                            <p className="namelabel">Name :</p>
                            <input type="text" name="name" id="name" placeholder="Your Name..." required />

                            <p className="emaillabel">Email :</p>
                            <input type="email" name="user_email" id="email" placeholder="Your Email Address..." required />

                            <p className="textarealabel"> Message : </p>
                            <textarea name="message" id="text" cols="35" rows="6" placeholder="Your Message..." required></textarea>
                            <br />
                            <input type="submit" value="Send" className="button" />
                        </form>



                    </div>
                    <div className="container info">
                        <p className="headingphone">PHONE</p>
                        <p className="phonenumber">Mobile Number : 7038158308</p>
                        <p className="emailheading">EMAIL</p>
                        <p className="emailaddress">vedantlb11@gmail.com</p>
                        <p className="socialmediaheading">SOCIAL</p>
                        <span className="socialicon"><a className="sociallink" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/vedant-bhosle-73748821b"><FaLinkedin size={22} /></a></span>
                        <span className="socialicon"><a className="sociallink" rel="noreferrer" target="_blank" href="https://instagram.com/vedant_bhosle_007?utm_medium=copy_link"><FaInstagram size={22} /></a></span>

                        <span className="socialicon"><a className="sociallink" rel="noreferrer" target="_blank" href="mailto:vedantlb11@gmail.com"><MdEmail size={22} /></a></span>

                    </div>
                </div>

            </div>
        </section>
        </>
    )
}
