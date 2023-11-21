import React from 'react'

function Search() {
    return (
        <>
            <section className="search-area pt-120 pb-120 p-relative fix" style={{ backgroundImage: "url(assets/img/bg/search_bg.png)", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                <div className="animations-10">
                    <img src="assets/img/bg/an-img-04.png" alt="an-img-01" />
                </div>
                <div className="animations-08">
                    <img src="assets/img/bg/an-img-05.png" alt="contact-bg-an-01" />
                </div>
                <div className="container">
                    <div className="row justify-content-center  align-items-center">
                        <div className="col-lg-8">
                            <div className="contact-bg">
                                <div className="section-title wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                    <h2>Search For Courses</h2>
                                    <p>
                                        Our community is being called to reimagine the future. As the only
                                        university where a renowned design school comes together with
                                        premier colleges, we are making learning more relevant and
                                        transformational.
                                    </p>
                                </div>
                                <form action="mail.php" method="post" className="contact-form mt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn2" name="firstn" placeholder="First Name" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email3" name="email" placeholder="Email" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-option mb-20">
                                                <select name="instructor" id="instructor">
                                                    <option value="instructore">Instructor</option>
                                                    <option value="hot-stone-message">Hot Stone Message</option>
                                                    <option value="facil-therophy">Facil &amp; Therophy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-option mb-20">
                                                <select name="department" id="department">
                                                    <option value="department">Department</option>
                                                    <option value="hot-stone-message">Hot Stone Message</option>
                                                    <option value="facil-therophy">Facil &amp; Therophy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-option mb-20">
                                                <select name="campus" id="campus">
                                                    <option value="campus">Campus</option>
                                                    <option value="hot-stone-message">Hot Stone Message</option>
                                                    <option value="facil-therophy">Facil &amp; Therophy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-option mb-20">
                                                <select name="level" id="level">
                                                    <option value="level">Level</option>
                                                    <option value="hot-stone-message">Hot Stone Message</option>
                                                    <option value="facil-therophy">Facil &amp; Therophy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="slider-btn">
                                                <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
                                                    Search Courses Here{" "}
                                                    <i className="fal fa-long-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search