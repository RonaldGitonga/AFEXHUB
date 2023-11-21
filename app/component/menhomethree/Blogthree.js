import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button type="button" className={`slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="far fa-chevron-right"></i></button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button type="button" className={`slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="far fa-chevron-left"></i></button>

  );
}

function Blogthree() {

  const settings = {
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
      <section id="blog" className="blog-area blog-area4 p-relative fix pt-120 pb-90" style={{ backgroundImage: "url(assets/img/bg/blog_bg2.png)", backgroundRepeat: "no-repeat", backgroundPosition: "top" }} >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title  mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                <h5>
                  <i className="fal fa-graduation-cap" /> Our Blog
                </h5>
                <h2>Read Our Blog</h2>
                <p className="mt-30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                  ipsum suspendisse ultrices.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="home-blog-active" {...settings}>
                <Slider {...settings}>
                  <div>
                    <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                      <div className="blog-thumb2">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/inner_b7.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="blog-content2">
                        <div className="b-meta">
                          <div className="meta-info">
                            <ul>
                              <li>
                                <i className="fal fa-user" /> By Admin{" "}
                              </li>
                              <li>
                                <i className="fal fa-comments" /> 3 Comments
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Full-day kindergarten in Alberta kindergarten saves families.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                      <div className="blog-thumb2">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/inner_b8.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="blog-content2">
                        <div className="b-meta">
                          <div className="meta-info">
                            <ul>
                              <li>
                                <i className="fal fa-user" /> By Admin{" "}
                              </li>
                              <li>
                                <i className="fal fa-comments" /> 3 Comments
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Planting Seeds in the Hearts of Preschoolers
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                      <div className="blog-thumb2">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/inner_b9.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="blog-content2">
                        <div className="b-meta">
                          <div className="meta-info">
                            <ul>
                              <li>
                                <i className="fal fa-user" /> By Admin{" "}
                              </li>
                              <li>
                                <i className="fal fa-comments" /> 3 Comments
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Why children need a Healthy Environment thousands
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                      <div className="blog-thumb2">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/inner_b5.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="blog-content2">
                        <div className="b-meta">
                          <div className="meta-info">
                            <ul>
                              <li>
                                <i className="fal fa-user" /> By Admin{" "}
                              </li>
                              <li>
                                <i className="fal fa-comments" /> 3 Comments
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Why children need a Healthy Environment thousands
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </Slider>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogthree