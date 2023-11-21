import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const faqData = [
    {
        id: 'headingThree',
        question: '01 Cras turpis felis, elementum sed mi at arcu ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
    {
        id: 'headingOne',
        question: '02 Vestibulum nibh risus, in neque eleifendulputate sem ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
    {
        id: 'headingTwo',
        question: '03 Donec maximus, sapien id auctor ornare ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
    {
        id: 'headingFour',
        question: '04 Vestibulum nibh risus, in neque eleifendulputate sem ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
    {
        id: 'headingFive',
        question: '05 Donec maximus, sapien id auctor ornare ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
];


function First() {

    const [video, setVideo] = useState();

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <section className="event event03 pt-150 pb-120 p-relative fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className="s-video-wrap2" style={{ backgroundImage: "url(assets/img/bg/video-img3.png)" }} >
                                <div className="s-video-content text-center">
                                    <h6>
                                        <Link to="#" className="popup-video mb-50" onClick={() => setVideo(true)}>
                                            <img src="assets/img/bg/play-button.png" alt="circle_right" />
                                        </Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className="faq-wrap pl-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="accordion" id="accordionExample">
                                    {faqData.map((item, index) => (
                                        <div className="card" key={index}>
                                            <div className="card-header" id={item.id}>
                                                <h2 className="mb-0">
                                                    <button className={`faq-btn${activeIndex === index ? '' : ' collapsed'}`}
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${index}`}
                                                        onClick={() => handleToggle(index)} >
                                                        {item.question}
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id={`collapse${index}`}
                                                className={`collapse${activeIndex === index ? ' show' : ''}`}
                                                data-bs-parent="#accordionExample">
                                                <div className="card-body">{item.answer}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {video &&
                <>
                    <div className="mfp-bg mfp-ready"></div>
                    <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style={{ overflow: "hidden" }}>
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

export default First