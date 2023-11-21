import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-angle-right"></i></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <button type="button" className={ `slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-angle-left"></i></button>
      
    );
}

function Courses() {
    const courses = [
        {
            category: 'IELTS/TOEFL',
            title: 'IELTS/TOEFL',
            description: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
            link: '/single-courses',
            img: 'assets/img/bg/couress-img-1.jpg',
        },
        {
            category: 'PREPS',
            title: 'SATs',
            description: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
            link: '/single-courses',
            img: 'assets/img/bg/couress-img-2.jpg',
        },
     
        {
            category: 'GRE/GMAT ',
            title: 'GRE/GMAT test prep',
            description: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
            link: '/single-courses',
            img: 'assets/img/bg/couress-img-4.jpg',
        },
        {
            category: 'IELTS/TOEFL',
            title: 'IELTS/TOEFL',
            description: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
            link: '/single-courses',
            img: 'assets/img/bg/couress-img-1.jpg',
        },
        {
            category: 'PREPS',
            title: 'SATs',
            description: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
            link: '/single-courses',
            img: 'assets/img/bg/couress-img-2.jpg',
        },
     
        {
            category: 'GRE/GMAT ',
            title: 'GRE/GMAT test prep',
            description: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
            link: '/single-courses',
            img: 'assets/img/bg/couress-img-4.jpg',
        },

   
    
    ];

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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
            <section className="courses pt-120 pb-120 p-relative fix">
                <div className="animations-01">
                    <img src="assets/img/bg/an-img-03.png" alt="an-img-01" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-relative">
                            <div className="section-title center-align mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                                <h5>
                                    <i className="fal fa-graduation-cap" /> Our Courses
                                </h5>
                                <h2>Graduate Programs</h2>
                            </div>
                        </div>
                    </div>
                    <Slider className="row class-active" {...settings}>
                        {courses.map((course, index) => (
                            <div key={index} className="col-lg-4 col-md-6 ">
                                <div className="courses-item mb-30 hover-zoomin">
                                    <div className="thumb fix">
                                        <Link to={course.link}>
                                            <img src={course.img} alt="contact-bg-an-01" />
                                        </Link>
                                    </div>
                                    <div className="courses-content">
                                        <div className="cat">
                                            <i className="fal fa-graduation-cap" /> {course.category}
                                        </div>
                                        <h3>
                                            <Link to={course.link}>{course.title}</Link>
                                        </h3>
                                        <p>
                                            {course.description}
                                        </p>
                                        <Link to={course.link} className="readmore">
                                            Read More <i className="fal fa-long-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="icon">
                                        <img src="assets/img/icon/cou-icon.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Courses