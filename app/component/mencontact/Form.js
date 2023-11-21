import React from 'react'

function Form() {
    return (
        <>
            <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix" style={{ background: "#e7f0f8" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-2">
                            <div className="contact-bg">
                                <div className="section-title center-align text-center mb-50">
                                    <h2>Custom Inqure Form</h2>
                                </div>
                                <form action="mail.php" method="post" className="contact-form mt-30 text-center" >
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="contact-field p-relative c-name mb-30">
                                                <input type="text" id="firstn" name="firstn" placeholder="First Name" required="" />
                                                <i className="icon fal fa-user" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="contact-field p-relative c-subject mb-30">
                                                <input type="text" id="email" name="email" placeholder="Email" required="" />
                                                <i className="icon fal fa-envelope" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="contact-field p-relative c-subject mb-30">
                                                <input type="text" id="phone" name="phone" placeholder="Phone No." required="" />
                                                <i className="icon fal fa-phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-message mb-30">
                                                <textarea name="message" id="message" cols={30} rows={50} placeholder="Write comments" defaultValue={""} />
                                                <i className="icon fal fa-edit" />
                                            </div>
                                            <div className="slider-btn  text-center">
                                                <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" >
                                                    Make An Request <i className="fal fa-long-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form