import React from 'react'
import { Link } from 'react-router-dom'

function Admission() {
  return (
    <>
        <section className="about-area about-p pt-120 pb-120 p-relative fix" style={{ backgroundImage: "url(assets/img/bg/admission_bg.png)", backgroundRepeat: "no-repeat", backgroundPosition: "top" }} >
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img src="assets/img/features/about_img.png" alt="img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                    <div className="about-title second-title pb-25">
                        <h2>Admission &amp; Aid</h2>
                    </div>
                    <p className="txt-clr">
                        Our community is being called to reimagine the future. As the only
                        university where a renowned design school comes together with
                        premier colleges, we are making learning more relevant and
                        transformational.
                    </p>
                    <p className="txt-clr">
                        At Estuidar University, we prepare you to launch your career by pro
                        supportive, creative, and professional environment from which to
                        learn practical skills, build a network of industry contacts.
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
    </>
  )
}

export default Admission