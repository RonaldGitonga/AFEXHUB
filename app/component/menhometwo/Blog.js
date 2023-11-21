import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const blogPosts = [
    {
      imgSrc: "assets/img/blog/inner_b4.jpg",
      date: "24th March 2023",
      author: "Admin",
      comments: "3 Comments",
      title: "Full-day kindergarten in Alberta kindergarten saves families.",
    },
    {
      imgSrc: "assets/img/blog/inner_b5.jpg",
      date: "24th March 2023",
      author: "Admin",
      comments: "3 Comments",
      title: "Planting Seeds in the Hearts of Preschoolers",
    },
    {
      imgSrc: "assets/img/blog/inner_b6.jpg",
      date: "24th March 2023",
      author: "Admin",
      comments: "3 Comments",
      title: "Why children need a Healthy Environment thousands",
    },
  ];

  return (
    <>
      <section id="blog" className="blog-area blog-area3 p-relative fix pt-120 pb-90">
        <div className="animations-06">
          <img src="assets/img/bg/an-img-18.png" alt="an-img-01" />
        </div>
        <div className="animations-09">
          <img src="assets/img/bg/an-img-19.png" alt="contact-bg-an-01" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                <h5>
                  <i className="fal fa-graduation-cap" /> Our Blog
                </h5>
                <h2>Latest Blog &amp; News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blogPosts.map((post, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                  <div className="blog-thumb2">
                    <Link to="/blog-details">
                      <img src={post.imgSrc} alt="img" />
                    </Link>
                    <div className="date-home">
                      <i className="fal fa-calendar-alt" /> {post.date}
                    </div>
                  </div>
                  <div className="blog-content2">
                    <div className="b-meta">
                      <div className="meta-info">
                        <ul>
                          <li>
                            <i className="fal fa-user" /> By {post.author}{" "}
                          </li>
                          <li>
                            <i className="fal fa-comments" /> {post.comments}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h4>
                      <Link to="/blog-details">
                        {post.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
