import React from 'react'

function Subscribe() {
    return (
        <>
            <section className="newslater-area pt-60 pb-60" style={{ backgroundColor: "#125875" }} >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="section-title newslater-title">
                                <div className="icon">
                                    <img src="assets/img/icon/send-mail.png" alt="img" />
                                </div>
                                <div className="text">
                                    <h2>Subscribe for Newsletter</h2>
                                    <p>Manage Your Business With Our Software</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater" >
                                <div className="form-group p-relative">
                                    <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..." defaultValue="" required="" />
                                    <button type="submit" className="btn btn-custom" id="send2">
                                        Subscribe Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe