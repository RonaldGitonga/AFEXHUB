import React from 'react';
import Slider from "react-slick";

function Testimonialthree() {

  const testimonials = [
    {
      id: 1,
      imgSrc: "assets/img/testimonial/qt-icon.png",
      quote: "Etiam sodales congue consequat. Aenean vitae ullamcorper leo. Pellentesque condimentum ex ut erat posuere, quis tincidunt augue semper. Cras congue nulla sed quam hendrerit euismod.",
      authorName: "Alexis browni JR.",
      authorRole: "founder of alxis co.",
      avatar: "assets/img/testimonial/testi_avatar.png"
    },
    {
      id: 2,
      imgSrc: "assets/img/testimonial/qt-icon.png",
      quote: "Etiam sodales congue consequat. Aenean vitae ullamcorper leo. Pellentesque condimentum ex ut erat posuere, quis tincidunt augue semper. Cras congue nulla sed quam hendrerit euismod.",
      authorName: "Paul M. Matney",
      authorRole: "Lawyer",
      avatar: "assets/img/testimonial/testi_avatar.png"
    },
    {
      id: 3,
      imgSrc: "assets/img/testimonial/qt-icon.png",
      quote: "Etiam sodales congue consequat. Aenean vitae ullamcorper leo. Pellentesque condimentum ex ut erat posuere, quis tincidunt augue semper. Cras congue nulla sed quam hendrerit euismod.",
      authorName: "Alexis browni JR.",
      authorRole: "founder of alxis co.",
      avatar: "assets/img/testimonial/testi_avatar.png"
    }
  ];

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

  return (
    <section className="testimonial-area text-center pt-120 pb-120" style={{ background: "url(assets/img/bg/testimonial-bg2.png) no-repeat", backgroundSize: "cover" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Slider className="testimonial-active2 testimonial-area3 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s" {...settings}>
              {testimonials.map((testimonial) => (
                <div className="single-testimonial-outer" key={testimonial.id}>
                  <div className="single-testimonial">
                    <div className="qt-img">
                      <img src={testimonial.imgSrc} alt="img" />
                    </div>
                    <p>{testimonial.quote}</p>
                    <div className="testi-author">
                      <img src={testimonial.avatar} alt="img" />
                      <div className="ta-info">
                        <h6>{testimonial.authorName}</h6>
                        <span>{testimonial.authorRole}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonialthree;