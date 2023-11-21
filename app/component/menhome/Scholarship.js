import React from 'react'
import { Link } from 'react-router-dom'

function Scholarship() {
  return (
    <>
        <section className="cta-area cta-bg pt-50 pb-50" style={{ backgroundImage: "url(assets/img/bg/cta_bg02.png)" }} >
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <h2>Scholarship Programs</h2>
                    <p>
                        At Estuidar University, we prepare you to launch your career by
                        providing a supportive, creative, and professional environment from
                        which to learn practical skills and build a network of industry
                        contacts.
                    </p>
                    </div>
                </div>
                <div className="col-lg-4 text-right">
                    <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s" >
                    <Link to="/about" className="btn ss-btn smoth-scroll">
                        Financial Aid <i className="fal fa-long-arrow-right" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Scholarship