import React from 'react'
import { Link } from 'react-router-dom'

function Events() {
  return (
    <>
        <section className="event event02 pt-120 pb-90 p-relative fix">
            <div className="animations-06">
                <img src="assets/img/bg/an-img-14.png" alt="an-img-01" />
            </div>
            <div className="animations-08">
                <img src="assets/img/bg/an-img-15.png" alt="contact-bg-an-01" />
            </div>
            <div className="animations-09">
                <img src="assets/img/bg/an-img-16.png" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-12 p-relative">
                    <div
                    className="section-title center-align mb-50 text-center wow fadeInDown animated"
                    data-animation="fadeInDown"
                    data-delay=".4s"
                    >
                    <h5>
                        <i className="fal fa-graduation-cap" /> Our Events
                    </h5>
                    <h2>Upcoming Events</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-6 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to="/single-event">
                        {" "}
                        <img src="assets/img/bg/evn-img-01.png" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="text">
                        <div className="icon">
                            <i className="fal fa-calendar-alt" />
                        </div>
                        <div className="date">
                            <strong>18</strong> March, 2023
                        </div>
                        <h3>
                            <Link to="/single-event"> Cras faucibus ornare luctus.</Link>
                        </h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea tically
                        </p>
                        <div className="time">
                            3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                            <strong>United Kingdom</strong>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to="/single-event">
                            <img src="assets/img/bg/evn-img-02.png" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="text">
                        <div className="icon">
                            <i className="fal fa-calendar-alt" />
                        </div>
                        <div className="date">
                            <strong>20</strong> March, 2023
                        </div>
                        <h3>
                            <Link to="/single-event"> Cras faucibus ornare luctus.</Link>
                        </h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea tically
                        </p>
                        <div className="time">
                            3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                            <strong>United Kingdom</strong>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to="/single-event">
                            <img src="assets/img/bg/evn-img-03.png" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="text">
                        <div className="icon">
                            <i className="fal fa-calendar-alt" />
                        </div>
                        <div className="date">
                            <strong>22</strong> March, 2023
                        </div>
                        <h3>
                            <Link to="/single-event"> Cras faucibus ornare luctus.</Link>
                        </h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea tically
                        </p>
                        <div className="time">
                            3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                            <strong>United Kingdom</strong>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to="/single-event">
                            <img src="assets/img/bg/evn-img-04.png" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="text">
                        <div className="icon">
                            <i className="fal fa-calendar-alt" />
                        </div>
                        <div className="date">
                            <strong>24</strong> March, 2023
                        </div>
                        <h3>
                            <Link to="/single-event"> Cras faucibus ornare luctus.</Link>
                        </h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea tically
                        </p>
                        <div className="time">
                            3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                            <strong>United Kingdom</strong>
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

export default Events