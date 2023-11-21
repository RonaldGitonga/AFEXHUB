import React from 'react'
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-arrow-down"></i></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-arrow-up"></i></button>
    );
}

const images = [
    {src: "assets/img/brand/b-logo1.png", alt: "img"},
    {src: "assets/img/brand/b-logo2.png", alt: "img"},
    {src: "assets/img/brand/b-logo3.png", alt: "img"},
    {src: "assets/img/brand/b-logo4.png", alt: "img"},
    {src: "assets/img/brand/b-logo5.png", alt: "img"},
];

function Brand() {

    const settings = {
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
            <div className="brand-area pt-60 pb-60" style={{ backgroundColor: "#125875" }}>
                <div className="container">
                    <Slider className="row brand-active" {...settings}>
                        {images.map((image, index) => (
                            <div className="col-xl-2" key={index}>
                                <div className="single-brand">
                                    <img src={image.src} alt={image.alt} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Brand
