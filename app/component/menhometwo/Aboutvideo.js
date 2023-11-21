import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'
import CountUp from 'react-countup';



function Aboutvideo() {

    const [video, setVideo] = useState();


  return (
    <>
        <section id="video" className="video-area p-relative">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="s-video-wrap" style={{ backgroundImage : "url(assets/img/bg/video-img.png)"}} >
                    <div className="s-video-content text-center">
                        <h2>Are You Ready To Love Preschool </h2>
                        <p>Lanunch Your Start Now</p>
                        <h6>
                        <Link to="#" className="popup-video mb-50" onClick={() => setVideo(true)} >
                            <img src="assets/img/bg/play-button2.png" alt="circle_right" />
                        </Link>
                        </h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <div className="counter-area pb-90" style={{ background: "#da4a47" }}>
            <div className="container">
                <div className="row p-relative">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <div className="counter p-relative" style={{ backgroundImage: "url(assets/img/bg/c-object.png)", backgroundRepeat: "no-repeat" }} >
                        <CountUp className="count" start={11} end={1547} ></CountUp>
                        <p>
                        Teacher <br />
                        &amp; Staff
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <div className="counter p-relative" style={{ backgroundImage: "url(assets/img/bg/c-object.png)", backgroundRepeat: "no-repeat" }} >
                        <CountUp className="count" start={15} end={2587} ></CountUp>
                        <p> Our Happy <br /> Student </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <div className="counter p-relative" style={{ backgroundImage: "url(assets/img/bg/c-object.png)", backgroundRepeat: "no-repeat" }} >
                        <CountUp className="count" start={12} end={1879} >  </CountUp>
                        <p> School <br /> Class </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <div className="counter p-relative" style={{ backgroundImage: "url(assets/img/bg/c-object.png)", backgroundRepeat: "no-repeat" }} >
                        <CountUp className="count" start={15} end={2547} > </CountUp>
                        <p> Computer <br /> Labs </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

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

export default Aboutvideo