import React from 'react'
import { Link } from 'react-router-dom'

function Child() {
  return (
    <>
        <section className="cta-area cta-bg pt-30 pb-30" style={{ background: "#da4a47" }} >
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <h2>How to Enroll Your Child to a Class?</h2>
                    <p>
                        At Estuidar University, we prepare you to launch your career by
                        providing a supportive, creative, and professional environment from
                        which to learn practical skills and build a network of industry
                        contacts.
                    </p>
                    </div>
                </div>
                <div className="col-lg-4 text-right">
                    <div className="cta-btn s-cta-btn wow fadeInRight animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <Link to="/about" className="btn ss-btn smoth-scroll">
                        Enrollment Now <i className="fal fa-long-arrow-right" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Child