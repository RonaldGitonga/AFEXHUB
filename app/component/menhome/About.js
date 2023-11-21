import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
       <section className="about-area about-p pt-120 pb-120 p-relative fix" style={{ background: "#eff7ff" }} >
            <div className="animations-02">
                <img src="assets/img/bg/an-img-02.png" alt="contact-bg-an-01" />
            </div>

            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                    <img src="assets/img/features/about_img_02.png" alt="img" />
                    <div className="about-text second-about">
                        <span>
                        25 <sub>+</sub>
                        </span>
                        <p>Years of Experience</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                    <div className="about-title second-title pb-25">
                        <h5>
                        <i className="fal fa-graduation-cap" /> About Our University
                        </h5>
                        <h2>A Few Words About the University</h2>
                    </div>
                    <p className="txt-clr">
                        Our community is being called to reimagine the future. As the only
                        university where a renowned design school comes together with
                        premier colleges, we are making learning more relevant and
                        transformational.
                    </p>
                    <p>
                        We are proud to offer top ranige in employment services such and
                        asser payroll and benefits administrato managemen and asistance with
                        global business range ployment employer readings from religious
                        texts or literature are also commonly inc compliance.
                    </p>
                    <div className="about-content2">
                        <div className="row">
                        <div className="col-md-12">
                            <ul className="green2">
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                                    <span>01</span>
                                </div>{" "}
                                <div className="text">
                                    <h3>Doctoral Degrees</h3>{" "}
                                    <p>
                                    consectetur adipiscing elit sed do eiusmod tem incid
                                    idunt.
                                    </p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                                    <span>02</span>
                                </div>{" "}
                                <div className="text">
                                    <h3>Global Students</h3>{" "}
                                    <p>
                                    consectetur adipiscing elit sed do eiusmod tem incid
                                    idunt.
                                    </p>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="slider-btn mt-20">
                        <Link to="/about" className="btn ss-btn smoth-scroll">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default About