import React from 'react';
import Slider from 'react-slick';

function Redslider() {
  const images = [
    'assets/img/brand/b-logo1.png',
    'assets/img/brand/b-logo2.png',
    'assets/img/brand/b-logo3.png',
    'assets/img/brand/b-logo4.png',
    'assets/img/brand/b-logo5.png'
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
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
    <div className="brand-area pt-60 pb-60" style={{ backgroundColor: '#dbac3b' }}>
      <div className="container">
        <Slider className="row brand-active" {...settings}>
          {images.map((image, index) => (
            <div key={index} className="col-xl-2">
              <div className="single-brand">
                <img src={image} alt="img" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Redslider;
