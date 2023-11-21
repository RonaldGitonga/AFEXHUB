import React from 'react'
import Slider from "react-slick";

function Testimonial() {

     let settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };

  return (
    <>
       <section className="testimonial-area pt-120 pb-115 p-relative fix">
            <div className="animations-01">
                <img src="assets/img/bg/an-img-03.png" alt="an-img-01" />
            </div>
            <div className="animations-02">
                <img src="assets/img/bg/an-img-04.png" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                            <h5>
                                <i className="fal fa-graduation-cap" /> Testimonial
                            </h5>
                            
                            <h2>What Our Clients Say</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <Slider className="testimonial-active wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" {...settings}>

                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Margie Dose</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>

                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar_02.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Rock Dloder</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>

                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar_03.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Roboto Eorure</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>

                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Margie Dose</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>
                            
                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar_02.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Rock Dloder</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default Testimonial