import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  return (
    <>
        <section className="team-area-content">
            <div className="container">
                <div className="lower-content">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="team-img-box">
                        <Link to="/team-single">
                            <img src="assets/img/team/team01.jpg" alt="img" />
                        </Link>
                    </div>
                    </div>
                    <div className="text-column col-lg-7 col-md-12 col-sm-12">
                    <div className="s-about-content pl-30 wow fadeInRight" data-animation="fadeInRight" data-delay=".2s" >
                        <h2>Ronal Anderson</h2>
                        <p>The world of search engine optimization is complex.</p>
                        <div className="per-info">
                        <div className="info-text">
                            <strong>Course: 2</strong>
                            <p>Students: 30</p>
                        </div>
                        <div className="info-text">
                            <strong>Experiance:</strong>
                            <p>10 Years</p>
                        </div>
                        <div className="info-text">
                            <p>
                            <i className="fal fa-phone" /> +(963) 2145 3654
                            </p>
                            <p>
                            <i className="fal fa-envelope" /> example@example.com
                            </p>
                        </div>
                        </div>
                        <h3>About Info</h3>
                        <p>
                        Fusce eleifend donec sapien sed phase lusa pellentesque
                        lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda
                        leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at
                        congue semper purus. Lorem ipsum dolor sit.The world of search
                        engine optimization is complex and ever-changing, but you can
                        easily understand the basics.
                        </p>
                        <div className="two-column mt-30">
                        <div className="row aling-items-center">
                            <div className="image-column col-xl-6 col-lg-12 col-md-12">
                            <div className="footer-social mt-10">
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </div>
                            </div>
                            <div className="text-column col-xl-6 col-lg-12 col-md-12 text-right">
                            <div className="slider-btn">
                                <Link to="/team" className="btn ss-btn smoth-scroll">
                                Read More <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                            </div>
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

export default First