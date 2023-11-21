import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';


function Video() {

    const [video, setVideo] = useState(false);

  return (
    <>
        <section className="cta-area cta-bg pt-160 pb-160" style={{ backgroundImage: "url(assets/img/bg/cta_bg.png)" }} >
            <div className="container">
                <div className="row justify-content-center  align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="section-title cta-title video-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <h2>
                        {" "}
                        We're <span>AFEX HUB</span> &amp; We're Diffirent
                    </h2>
                    <p>
                        Our community is being called to reimagine the future. As the only
                        university where a renowned design school colleges,{" "}
                    </p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-4">
                    <div className="s-video-content">
                        <Link to="#" className="popup-video mb-50" onClick={() => setVideo(true)} >
                            <img src="assets/img/bg/play-button.png" alt="circle_right" onClick={() => setVideo(true)} />
                        </Link>
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
                        <iframe className="mfp-iframe" src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1" frameborder="0" allowfullscreen=""></iframe>
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

export default Video