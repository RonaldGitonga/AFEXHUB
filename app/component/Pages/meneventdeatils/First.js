import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function First() {

    useEffect(() => {
        let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        let x = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
        }
        }, 1000);
    }, [])

    return (
        <>
            <section className="project-detail">
                <div className="container">
                    <div className="upper-box">
                        <div className="single-item-carousel owl-carousel owl-theme">
                            <figure className="image">
                                <img src="assets/img/blog/inner_b1.jpg" alt="" />
                            </figure>
                        </div>
                    </div>

                    <div className="lower-content2">
                        <div className="row">
                            <div className="text-column col-lg-9 col-md-12 col-sm-12">
                                <div className="s-about-content wow fadeInRight" data-animation="fadeInRight" data-delay=".2s" >
                                    <h2>UI/UX Design Contest 2023</h2>
                                    <p>
                                        The world of search engine optimization is complex and
                                        ever-changing, but you can easily understand the basics, and even
                                        a small amount of SEO knowledge can make a big difference. Free
                                        SEO education is also widely available on the web, including in
                                        guides like this! (Woohoo!) This guide is designed to describe all
                                        major aspects of SEO, from finding the terms and phrases
                                        (keywords) that can generate qualified traffic to your website, to
                                        making your site friendly to search engines, to building links and
                                        marketing the unique value of your site.Etiam pharetra erat sed
                                        fermentum feugiat velit mauris egestas quam ut erat justo.
                                    </p>
                                    <div countdown="" className="conterdown wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s" data-date="Jan 1 2024 00:00:00" >
                                        <div className="timer">
                                            <div className="timer-outer bdr1">
                                                <span className="days" data-days="" id='day'> 0 </span>
                                                <div className="smalltext">Days</div>
                                                <div className="value-bar" />
                                            </div>
                                            <div className="timer-outer bdr2">
                                                <span className="hours" data-hours="" id='hours'> 0 </span>
                                                <div className="smalltext">Hours</div>
                                            </div>
                                            <div className="timer-outer bdr3">
                                                <span className="minutes" data-minutes="" id='minutes'> 0 </span>
                                                <div className="smalltext">Minutes</div>
                                            </div>
                                            <div className="timer-outer bdr4">
                                                <span className="seconds" data-seconds="" id="seconds"> 0 </span>
                                                <div className="smalltext">Seconds</div>
                                            </div>
                                            <p id="time-up" />
                                        </div>
                                    </div>
                                    <p>
                                        Fusce eleifend donec sapien sed phase lusa pellentesque
                                        lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda
                                        leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at
                                        congue semper purus. Lorem ipsum dolor sit.The world of search
                                        engine optimization is complex and ever-changing, but you can
                                        easily understand the basics.
                                    </p>
                                    <p>
                                        Lorem ipsum is simply free text used by copytyping refreshing.
                                        Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                                        et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                                        port lacus quis enim var sed efficitur turpis gilla sed sit amet
                                        finibus eros. Lorem Ipsum is simply dummy text of the printing.
                                    </p>
                                    <div className="two-column mt-30">
                                        <div className="row aling-items-center">
                                            <div className="image-column col-xl-6 col-lg-12 col-md-12">
                                                <div className="footer-social mt-10">
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="text-column col-xl-6 col-lg-12 col-md-12 text-right"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-column col-lg-3 col-md-12 col-sm-12">
                                <div className="inner-column2">
                                    <h3>Event Details</h3>
                                    <ul className="project-info clearfix">
                                        <li>
                                            <span className="icon fal fa-clock" />
                                            <strong>4:00 pm - 6:00 pm</strong>
                                        </li>
                                        <li>
                                            <span className="icon fal fa-calendar-alt" />
                                            <strong>03 March, 2022</strong>
                                        </li>
                                        <li>
                                            <span className="icon fal fa-map-marker-check" />
                                            <strong>12/A, NewYork Sydney City</strong>
                                        </li>
                                        <li>
                                            <span className="icon fal fa-envelope" />
                                            <strong>yourmail@gmail.com</strong>
                                        </li>
                                        <li>
                                            <span className="icon fal fa-phone" />
                                            <strong>+91 705 2101 786</strong>
                                        </li>
                                        <li>
                                            <div className="slider-btn">
                                                <Link to="/contact" className="btn ss-btn smoth-scroll">
                                                    Book A Seat <i className="fal fa-long-arrow-right" />
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First