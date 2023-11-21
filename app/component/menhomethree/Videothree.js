import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'


function Videothree() {

    const [video, setVideo] = useState();

  return (
    <>
        <section className="event event03 pt-120 pb-90 p-relative fix" style={{ background: "#f7f9ff" }}>
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-12  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="section-title center-align mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5>
                        <i className="fal fa-graduation-cap" /> Video Tour
                    </h5>
                    <h2>School Video Tour</h2>
                    </div>
                    <div className="s-video-wrap2" style={{ backgroundImage: "url(assets/img/bg/video-img2.png)" }} >
                    <div className="s-video-content text-center">
                        <h6>
                            <Link to="#" className="popup-video mb-50" onClick={() => setVideo(true)} >
                                <img src="assets/img/bg/play-button2.png" alt="circle_right" />
                            </Link>
                        </h6>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="section-title center-align mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5>
                        <i className="fal fa-graduation-cap" /> Our Events
                    </h5>
                    <h2>Upcoming Events</h2>
                    </div>
                    <div className="event-item mb-20 hover-zoomin">
                    <div className="event-content">
                        <div className="icon">
                        <i className="fal fa-calendar-alt" />
                        </div>
                        <div className="date">
                        <strong>22</strong> March, 2023
                        </div>
                        <div className="text">
                        <h3>
                            <Link to="/single-event">
                            {" "}
                            Summer High School Journalism Camp Registration Form
                            </Link>
                        </h3>
                        <div className="time">
                            <i className="fal fa-alarm-clock" /> 3:30 pm - 4:30 pm{" "}
                            <i className="fal fa-location" />{" "}
                            <strong>United Kingdom</strong>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="event-item mb-20 hover-zoomin">
                    <div className="event-content">
                        <div className="icon">
                        <i className="fal fa-calendar-alt" />
                        </div>
                        <div className="date">
                        <strong>22</strong> March, 2023
                        </div>
                        <div className="text">
                        <h3>
                            <Link to="/single-event">
                            Event Summer High School Reunion Alumni Golf Tour
                            </Link>
                        </h3>
                        <div className="time">
                            <i className="fal fa-alarm-clock" /> 3:30 pm - 4:30 pm{" "}
                            <i className="fal fa-location" />{" "}
                            <strong>United Kingdom</strong>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="event-item mb-20 hover-zoomin">
                    <div className="event-content">
                        <div className="icon">
                        <i className="fal fa-calendar-alt" />
                        </div>
                        <div className="date">
                        <strong>22</strong> March, 2023
                        </div>
                        <div className="text">
                        <h3>
                            <Link to="/single-event">
                                 Event Summer High School Reunion Alumni Golf Tour
                            </Link>
                        </h3>
                        <div className="time">
                            <i className="fal fa-alarm-clock" /> 3:30 pm - 4:30 pm{" "}
                            <i className="fal fa-location" />{" "}
                            <strong>United Kingdom</strong>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        {video &&
            <>
                <div className="mfp-bg mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style={{overflow: "hidden"}}> 
                <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                    <div className="mfp-content">
                        <div className="mfp-iframe-scaler">
                            <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setVideo(false)} >×</button>
                            <Iframe className="mfp-iframe" src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1" frameborder="0" allowfullscreen=""></Iframe>
                            </div>
                            </div>
                            <div className="mfp-preloader">Loading...</div>
                            </div>
                </div>
            </>
        }
    </>
  )
}

export default Videothree