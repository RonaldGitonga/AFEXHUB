import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  return (
    <>
        <section className="event event03 pt-120 pb-120 p-relative fix">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 text-center  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <img src="assets/img/bg/404-img.png" alt="logo" />
                    <div className="slider-btn mt-50">
                    <Link to="/" className="btn ss-btn smoth-scroll">
                        Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default First