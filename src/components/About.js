import React from 'react'
import '../about.css'
export default function About() {
    return (
        <>
            <section className="section2" id="part2">


                <div className="container about_1_container">
                    <h4 className="about" >ABOUT</h4>
                    <h2>Personal Info</h2>
                    <p>Get to know more about me</p>
                </div>
                <div className="container about_2_container">

                    <div className="container about_in_container_2_container1">
                        <h4>Hello!</h4>
                        <p>My name is Vedant Bhosle and I'm a passionate Frontend Web <br /> devloper using Web
                            tecnologies to buid amazing web app and <br /> focous on solving problem on different niches
                            and different <br /> industries using the power of technology. </p>
                        <p>I will love to hear from you, whether it's a project,job opportunity,or just a chat. Feel free to contact me.</p>
                    </div>
                    <div className="container  about_in_container_2_container2">
                        <h4>Skills</h4>
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                        <span className="skill">JAVASCRIPT</span>
                        <br />
                        <span className="skill react">REACT</span>
                        <span className="skill git">GIT</span>
                    </div>

                </div>

            </section>
        </>
    )
}
