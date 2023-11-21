import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="far fa-chevron-right"></i></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <button type="button" className={ `slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="far fa-chevron-left"></i></button>
      
    );
}



function Going() {

    const settings = {
        infinite: true,
        arrows: true,
        prevArrow: <SamplePrevArrow/>,
		nextArrow: <SampleNextArrow/>,
        speed: 1000,
        slidesToShow:3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
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
        <section className="class-area pt-120 pb-120 p-relative fix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="section-title text-center mb-50">
                        <h5>On Going Classes</h5>
                        <h2>Get The Best Classes With Us</h2>
                        </div>
                    </div>
                </div>

                <div className="team-active class-scroll">
                    <Slider {...settings}>
                        <div>
                            <div className="class-item mb-30 ">
                                    
                                    <div className="class-img">
                                    <div className="class-img-outer">
                                        <Link to="/single-courses-2">
                                        {" "}
                                        <img src="assets/img/class/class-7.jpg" alt="class image" />
                                        </Link>
                                        
                                        <div className="course-meta">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8">
                                            <div className="author">
                                                <div className="thumb">
                                                    <img src="assets/img/bg/testi_avatar.png" alt="image" />
                                                </div>
                                                <div className="text">
                                                    <Link to="/single-courses-2">Robto Jone</Link>
                                                <p>Teacher</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <img src="assets/img/bg/star.png" alt="image" />
                                            </div>
                                        </div>
                                        </div>
                                    
                                    </div>
                                    </div>
                                    
                                    <ul className="schedule">
                                    <li>
                                        <span>Age:</span>
                                        <span className="class-age">5-10 Years</span>
                                    </li>
                                    <li>
                                        <span>Time:</span>
                                        <span className="class-size">8-10am</span>
                                    </li>
                                    <li>
                                        <span>Class Size:</span>
                                        <span className="class-size">28</span>
                                    </li>
                                    <li>
                                        <span>Fee:</span>
                                        <span className="class-size">$50</span>
                                    </li>
                                    </ul>
                                
                                    <div className="class-content">
                                    <h4 className="title">
                                        <Link to="/single-courses">Languge Class</Link>
                                    </h4>
                                    <p>
                                        Seamlessly visualize quality ellectual capital without superior
                                        collaboration and idea.
                                    </p>
                                    </div>
                                    
                            </div>        
                        </div>

                        <div>
                            <div className="class-item mb-30 ">
                                
                                <div className="class-img">
                                <div className="class-img-outer">
                                    <Link to="/single-courses-2">
                                    {" "}
                                    <img src="assets/img/class/class-8.jpg" alt="class image" />
                                    </Link>
                                    
                                    <div className="course-meta">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                        <div className="author">
                                            <div className="thumb">
                                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                                            </div>
                                            <div className="text">
                                            <Link to="/single-courses-2">Robto Jone</Link>
                                            <p>Teacher</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <img src="assets/img/bg/star.png" alt="image" />
                                        </div>
                                    </div>
                                    </div>
                                
                                </div>
                                </div>
                                
                                
                                <ul className="schedule">
                                <li>
                                    <span>Age:</span>
                                    <span className="class-age">5-10 Years</span>
                                </li>
                                <li>
                                    <span>Time:</span>
                                    <span className="class-size">8-10am</span>
                                </li>
                                <li>
                                    <span>Class Size:</span>
                                    <span className="class-size">28</span>
                                </li>
                                <li>
                                    <span>Fee:</span>
                                    <span className="class-size">$50</span>
                                </li>
                                </ul>
                            
                            
                                <div className="class-content">
                                <h4 className="title">
                                    <Link to="/single-courses">Drawing Class</Link>
                                </h4>
                                <p>
                                    Seamlessly visualize quality ellectual capital without superior
                                    collaboration and idea.
                                </p>
                                </div>
                                
                            </div>
                        </div>

                        <div>
                            <div className="class-item mb-30 ">
                                
                                <div className="class-img">
                                <div className="class-img-outer">
                                    <Link to="/single-courses-2">
                                    {" "}
                                    <img src="assets/img/class/class-9.jpg" alt="class image" />
                                    </Link>
                                    
                                    <div className="course-meta">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                        <div className="author">
                                            <div className="thumb">
                                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                                            </div>
                                            <div className="text">
                                            <Link to="/single-courses-2">Robto Jone</Link>
                                            <p>Teacher</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <img src="assets/img/bg/star.png" alt="image" />
                                        </div>
                                    </div>
                                    </div>
                                
                                </div>
                                </div>
                                
                                
                                <ul className="schedule">
                                <li>
                                    <span>Age:</span>
                                    <span className="class-age">5-10 Years</span>
                                </li>
                                <li>
                                    <span>Time:</span>
                                    <span className="class-size">8-10am</span>
                                </li>
                                <li>
                                    <span>Class Size:</span>
                                    <span className="class-size">28</span>
                                </li>
                                <li>
                                    <span>Fee:</span>
                                    <span className="class-size">$50</span>
                                </li>
                                </ul>
                            
                            
                                <div className="class-content">
                                <h4 className="title">
                                    <Link to="/single-courses">Mathematics Class</Link>
                                </h4>
                                <p>
                                    Seamlessly visualize quality ellectual capital without superior
                                    collaboration and idea.
                                </p>
                                </div>
                                
                            </div>       
                        </div>

                        <div>
                            <div className="class-item mb-30 ">
                                
                                <div className="class-img">
                                <div className="class-img-outer">
                                    <Link to="/single-courses-2">
                                    {" "}
                                    <img src="assets/img/class/class-10.jpg" alt="class image" />
                                    </Link>
                                    
                                    <div className="course-meta">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                        <div className="author">
                                            <div className="thumb">
                                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                                            </div>
                                            <div className="text">
                                            <Link to="/single-courses-2">Robto Jone</Link>
                                            <p>Teacher</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <img src="assets/img/bg/star.png" alt="image" />
                                        </div>
                                    </div>
                                    </div>
                                
                                </div>
                                </div>
                                
                                
                                <ul className="schedule">
                                <li>
                                    <span>Age:</span>
                                    <span className="class-age">5-10 Years</span>
                                </li>
                                <li>
                                    <span>Time:</span>
                                    <span className="class-size">8-10am</span>
                                </li>
                                <li>
                                    <span>Class Size:</span>
                                    <span className="class-size">28</span>
                                </li>
                                <li>
                                    <span>Fee:</span>
                                    <span className="class-size">$50</span>
                                </li>
                                </ul>
                            
                            
                                <div className="class-content">
                                <h4 className="title">
                                    <Link to="/single-courses">Web Design Class</Link>
                                </h4>
                                <p>
                                    Seamlessly visualize quality ellectual capital without superior
                                    collaboration and idea.
                                </p>
                                </div>
                                
                            </div> 
                        </div>
                        
                        <div>
                            <div className="class-item mb-30 ">
                                
                                <div className="class-img">
                                <div className="class-img-outer">
                                    <Link to="/single-courses-2">
                                    {" "}
                                    <img src="assets/img/class/class-10.jpg" alt="class image" />
                                    </Link>
                                    
                                    <div className="course-meta">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                        <div className="author">
                                            <div className="thumb">
                                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                                            </div>
                                            <div className="text">
                                            <Link to="/single-courses-2">Robto Jone</Link>
                                            <p>Teacher</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <img src="assets/img/bg/star.png" alt="image" />
                                        </div>
                                    </div>
                                    </div>
                                
                                </div>
                                </div>
                                
                                
                                <ul className="schedule">
                                <li>
                                    <span>Age:</span>
                                    <span className="class-age">5-10 Years</span>
                                </li>
                                <li>
                                    <span>Time:</span>
                                    <span className="class-size">8-10am</span>
                                </li>
                                <li>
                                    <span>Class Size:</span>
                                    <span className="class-size">28</span>
                                </li>
                                <li>
                                    <span>Fee:</span>
                                    <span className="class-size">$50</span>
                                </li>
                                </ul>
                            
                            
                                <div className="class-content">
                                <h4 className="title">
                                    <Link to="/single-courses">Web Design Class</Link>
                                </h4>
                                <p>
                                    Seamlessly visualize quality ellectual capital without superior
                                    collaboration and idea.
                                </p>
                                </div>
                                
                            </div> 
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    </>
  )
}

export default Going