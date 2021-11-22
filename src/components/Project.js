import { useState, useEffect } from 'react'
import '../project.css'
import img from '../images/news.png'
import img1 from '../images/textutil.png'

export default function Project() {



    return (
        <>
            <section className="section3" id="part3">
                <div className="container section4_1_container">

                    <h4 className="projectheading">PROJECTS</h4>
                    <h3>Recent Work</h3>
                </div>
                <div className="container section3_2_container">
                    <div className="card-group">
                        <div className="card card1">
                            <img src={img} className="card-img-top" alt="..." />

                            <div className="card-body">
                                <h5 className="card-title">News24by7</h5>
                                <p className="card-text">This is news webapp that display latest news of differnt feilds like sport, technology,science etc.. </p>
                            </div>
                        </div>
                        <div className="card card2" >
                            <img src={img1} className="card-img-top" alt="..." />

                            <div className="card-body">
                                <h5 className="card-title">Text Utilizer</h5>
                                <p className="card-text">This webapp helps for doing text operations like converting into uppercase, lowercase and removing extra spaces etc.. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </ >
    )
}
