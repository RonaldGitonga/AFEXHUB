import React from 'react'
import Slider from "react-slick";


function Blueslider() {

    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:1500,
        arrows: false,
        speed: 1000,
        slidesToShow:4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };

  return (
    <>
        <div className="brand-area pt-60 pb-60" style={{ backgroundColor: "#4ea9b4" }}>
            <div className="container">
                <Slider className="row brand-active" {...settings}>

                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src="assets/img/brand/b-logo1.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src="assets/img/brand/b-logo2.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src="assets/img/brand/b-logo3.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src="assets/img/brand/b-logo4.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src="assets/img/brand/b-logo5.png" alt="img" />
                        </div>
                    </div>

                </Slider>
            </div>
        </div>

    </>
  )
}

export default Blueslider