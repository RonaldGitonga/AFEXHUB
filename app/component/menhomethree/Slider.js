import React from 'react'
import { Link } from 'react-router-dom'

function Slider() {
  const animationProps = {
    dataanimation: 'fadeInUp',
    datadelay: '.4s',
  };

  return (
    <>
      <section id="parallax" className="slider-area slider-three fix p-relative">
        <div className="slider-active">
          <div className="single-slider slider-bg d-flex align-items-center pos" style={{ background: "url(assets/img/slider/slider_img03.png) no-repeat" }} >
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-7 col-md-9">
                  <div className="slider-content s-slider-content pt-20 text-center">
                    <h5 {...animationProps}>
                      Welcome To qeducato
                    </h5>
                    <h2 {...animationProps}>
                      Better <span>education</span> for Beautiful world.{" "}
                    </h2>
                    <p {...animationProps}>
                      Interdum et malesuada fames ac ante ipsum primis in faucibus.
                      Sed vehicula, ipsum at molestie tincidunt elementum volutpat
                      dapibus purus cursus sed nisl tristiqu.
                    </p>
                    <div className="slider-btn mt-30">
                      <Link to="/about" className="btn mr-15" {...animationProps}>
                        Explore Mor <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider