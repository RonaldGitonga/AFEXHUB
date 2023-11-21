import React from 'react'
import Slider from "react-slick";

function TestimonialItem({ imgSrc, quote, name, position }) {
  return (
    <div className="single-testimonial-outer">
      <div className="single-testimonial">
        <div className="qt-img">
          <img src="assets/img/testimonial/qt-icon.png" alt="img" />
        </div>
        <p>{quote}</p>
        <div className="testi-author">
          <img src={imgSrc} alt="img" />
          <div className="ta-info">
            <h6>{name}</h6>
            <span>{position}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Testimonial() {

    const settings = {
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" className="slick-prev"><i className="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" className="slick-next"><i className="fas fa-arrow-right"></i></button>',
        speed: 1000,
        slidestoshow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidestoshow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidestoshow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidestoshow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const testimonials = [
      {
        imgSrc: 'assets/img/testimonial/testi_avatar.png',
        quote: '“Etiam sodales congue consequat. Aenean vitae ullamcorper leo. Pellentesque condimentum ex ut erat posuere, quis tincidunt augue semper. Cras congue nulla sed quam hendrerit euismod”',
        name: 'Alexis browni JR.',
        position: 'founder of alxis co.'
      },
      {
        imgSrc: 'assets/img/testimonial/testi_avatar.png',
        quote: '“Etiam sodales congue consequat. Aenean vitae ullamcorper leo. Pellentesque condimentum ex ut erat posuere, quis tincidunt augue semper. Cras congue nulla sed quam hendrerit euismod”',
        name: 'Paul M. Matney',
        position: 'Lawyer'
      },
      {
        imgSrc: 'assets/img/testimonial/testi_avatar.png',
        quote: '“Etiam sodales congue consequat. Aenean vitae ullamcorper leo. Pellentesque condimentum ex ut erat posuere, quis tincidunt augue semper. Cras congue nulla sed quam hendrerit euismod”',
        name: 'Alexis browni JR.',
        position: 'founder of alxis co.'
      },
    ]

    return (
        <>
            <section className="testimonial-area text-center pt-120 pb-120" style={{ background: "url(assets/img/bg/testimonial-bg.png) no-repeat", backgroundSize: "cover" }} >
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <Slider className="testimonial-active2 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s" {...settings}>
                        {testimonials.map(({ imgSrc, quote, name, position }) => (
                            <TestimonialItem key={name} imgSrc={imgSrc} quote={quote} name={name} position={position}/> ))}
                        </Slider>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial