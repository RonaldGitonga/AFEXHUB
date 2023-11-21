import React from 'react'
import { Link } from 'react-router-dom'

function Slider() {
  return (
    <>
        <section id="parallax" className="slider-area slider-two fix p-relative">
            <div className="slider-shape ss-one layer" data-depth="0.10">
                <img src="assets/img/bg/slider_shape01.png" alt="shape" />
            </div>
            <div className="slider-shape ss-two layer" data-depth="0.30">
                <img src="assets/img/bg/slider_shape02.png" alt="shape" />
            </div>
            <div className="slider-shape ss-three layer" data-depth="0.40">
                <img src="assets/img/bg/slider_shape03.png" alt="shape" />
            </div>
            <div className="slider-shape ss-four layer" data-depth="0.40">
                <img src="assets/img/bg/slider_shape04.png" alt="shape" />
            </div>
            <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-center" style={{ background: "url(assets/img/slider/slider_img02.png) no-repeat" }} >
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="slider-content s-slider-content pt-150">
                        <h5 data-animation="fadeInUp" data-delay=".4s">
                            Welcome To Childcare Service
                        </h5>
                        <h2 data-animation="fadeInUp" data-delay=".4s">
                            The Premium School For Your Kid
                        </h2>
                        <p data-animation="fadeInUp" data-delay=".6s">
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Sed vehicula, ipsum at molestie tincidunt elementum volutpat
                            dapibus purus cursus sed nisl tristiqu.
                        </p>
                        <div className="slider-btn mt-30">
                            <Link to="/about" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s" >
                                Explore More <i className="fal fa-long-arrow-right" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4"></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Slider