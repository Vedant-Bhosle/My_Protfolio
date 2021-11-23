
import { useState } from 'react'
import '../section1.css'
// import img from '../images/protfolio.jpg'
import { GoThreeBars } from "react-icons/go";
export default function Section1() {
    const [togle, settogle] = useState(false)
    return (
        <>

            <section className="section1" id="part1">
                {/* --------------------------- */}
                <div className="mynavbar">
                    <div className="brand-title">
                        VB
                    </div>
                    <a onClick={() => settogle(!togle)} className="togglebutton"> <GoThreeBars className="icon" size={25} /></a>
                    <div className={togle ? "navbar-links active" : "navbar-links"}>
                        <ul>
                            <li><a href="#part1">HOME</a></li>
                            <li><a href="#part2">ABOUT</a></li>
                            <li><a href="#part3">PROJECTS</a></li>
                            <li><a href="#part4">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
                {/* ----------------------- */}
                <div className="container d-flex align-items-center content section1container">
                    <div className="container myself">
                        <p className="hello">Hello i am 	<span className="line">&#8212;&#8212;&#8212;</span></p>
                        <h2 className="main">Vedant Bhosle</h2>
                        <h1 className="main"> &lt; Frontend Devloper /	&gt;</h1>

                        <p className="mt-4 myselfcontent">I design and build quality responsive websites, clean user interface and rich interactive web apps <br />


                            Targeting React Javascript and other web devlopment apportunities.</p>
                        <p>i'm open to learning, adapt to work with the team ,freelance oppertunities,contract jobs and use <br />skills to solve to complex UI challanges and provide value to the growth of an organization.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
