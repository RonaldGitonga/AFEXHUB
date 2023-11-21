import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const faqItems = [
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
];

function First() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <section className="project-detail">
                <div className="container">
                    <div className="lower-content">
                        <div className="row">
                            <div className="text-column col-lg-9 col-md-9 col-sm-12">
                                <h2>The business Intelligence analyst Course</h2>
                                <div className="upper-box">
                                    <div className="single-item-carousel owl-carousel owl-theme">
                                        <figure className="image">
                                            <img src="assets/img/class/class-9.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="inner-column">
                                    <div className="course-meta2 review style2 clearfix mb-30">
                                        <ul className="left">
                                            <li>
                                                <div className="author">
                                                    <div className="thumb">
                                                        <img src="assets/img/bg/testi_avatar.png" alt="image" />
                                                    </div>
                                                    <div className="text">
                                                        <Link to="/single-courses-2">Robto Jone</Link>
                                                        <p>Teacher</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="categories">
                                                <div className="author">
                                                    <div className="text">
                                                        <a href="#" className="course-name">
                                                            Photoshop
                                                        </a>
                                                        <p>Categories</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="right">
                                            <li className="price">$59.00</li>
                                        </ul>
                                    </div>
                                    <h3>Course Overview</h3>
                                    <p>
                                        Lorem ipsum is simply free text used by copytyping refreshing.
                                        Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                                        et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                                        port lacus quis enim var sed efficitur turpis gilla sed sit amet
                                        finibus eros. Lorem Ipsum is simply dummy text of the printing.
                                    </p>
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
                                    <h4>What You Will Learn</h4>
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
                                    <ul className="pr-ul">
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                                Crawl accessibility so engines can read your website
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                                Share-worthy content that earns links, citations
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                                Keyword optimized to attract searchers &amp; engines
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                                Title, URL, &amp; description to draw high CTR
                                            </div>
                                        </li>
                                    </ul>
                                    <h4>Study Options:</h4>
                                    <table className="table table-bordered mb-40">
                                        <thead>
                                            <tr>
                                                <th>Qualification</th>
                                                <th>Length</th>
                                                <th>Code</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Bsc (Hons)</td>
                                                <td>3 years full time</td>
                                                <td>CDX3</td>
                                            </tr>
                                            <tr>
                                                <td>Bsc </td>
                                                <td>4 years full time</td>
                                                <td>CDX4</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h3>Frequently Asked Question</h3>
                                    <p>
                                        A business or organization established to provide a particular
                                        service, typically one that involves a organizing
                                        transactions.Lorem ipsum is simply free text used by copytyping
                                        refreshing. Neque porro est qui dolorem enim var sed efficitur
                                        turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                                        dummy text of the printing..
                                    </p>
                                    <div className="faq-wrap pt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                        <div className="accordion" id="accordionExample">
                                            {faqItems.map((item, index) => (
                                                <div className="card" key={index}>
                                                    <div className="card-header" id={item.id}>
                                                        <h2 className="mb-0">
                                                            <button className={`faq-btn${activeIndex === index ? '' : ' collapsed'}`} type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#collapse${index}`}
                                                                onClick={() => handleToggle(index)}>
                                                                {item.question}
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id={`collapse${index}`}
                                                        className={`collapse${activeIndex === index ? ' show' : ''}`}
                                                        data-bs-parent="#accordionExample" >
                                                        <div className="card-body">{item.answer}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <aside className="sidebar-widget info-column">
                                    <div className="inner-column3">
                                        <h3>Course Features</h3>
                                        <ul className="project-info clearfix">
                                            <li>
                                                <div className="priceing">
                                                    <strong>$59.00</strong> <sub>$139.00</sub>
                                                    <span className="discont">68% OFF</span>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="icon fal fa-home-lg-alt" />{" "}
                                                <strong>Instructor:</strong> <span>Eleanor Fant</span>
                                            </li>
                                            <li>
                                                <span className="icon fal fa-book" />{" "}
                                                <strong>Lectures:</strong> <span>14</span>
                                            </li>
                                            <li>
                                                <span className="icon fal fa-clock" />{" "}
                                                <strong>Duration: </strong> <span>6 weeks</span>
                                            </li>
                                            <li>
                                                <span className="icon fal fa-user" />{" "}
                                                <strong>Enrolled: </strong> <span>20 students</span>
                                            </li>
                                            <li>
                                                <span className="icon fal fa-globe" />{" "}
                                                <strong>Language: </strong> <span>English</span>
                                            </li>
                                            <li>
                                                <div className="slider-btn">
                                                    <Link to="/contact" className="btn ss-btn smoth-scroll">
                                                        Enroll <i className="fal fa-long-arrow-right" />
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First