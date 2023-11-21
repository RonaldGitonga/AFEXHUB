import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
        <section className="about-area about-p pt-90 pb-120 p-relative fix">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-img3 p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img src="assets/img/features/about_img_04.png" alt="img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                    <div className="about-title second-title pb-25">
                        <h5>
                        <i className="fal fa-graduation-cap" /> About Our Kids
                        </h5>
                        <h2>We Are High School Since 10 Years Experience</h2>
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

        <section className="cta-area cta-bg pt-30 pb-30" style={{ background: "#dbac3b" }} >
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <h2>Qeducato gives you the tools to create an online course.</h2>
                    </div>
                </div>
                <div className="col-lg-4 text-right">
                    <div className="cta-btn2 s-cta-btn wow fadeInRight animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <Link to="/contact" className="btn ss-btn smoth-scroll">
                        Contact Us <i className="fal fa-long-arrow-right" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About