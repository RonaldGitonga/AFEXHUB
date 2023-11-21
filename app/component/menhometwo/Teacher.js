import React from 'react'
import { Link } from 'react-router-dom'

const teachers = [
  {
    name: "Howard Holmes",
    position: "CEO & Founder",
    image: "assets/img/team/team09.png",
    social: [
      { platform: "facebook", link: "#" },
      { platform: "instagram", link: "#" },
      { platform: "twitter", link: "#" }
    ]
  },
  {
    name: "Ella Thompson",
    position: "Kids Teacher",
    image: "assets/img/team/team10.png",
    social: [
      { platform: "facebook", link: "#" },
      { platform: "instagram", link: "#" },
      { platform: "twitter", link: "#" }
    ]
  },
  {
    name: "Vincent Cooper",
    position: "Kids Teacher",
    image: "assets/img/team/team11.png",
    social: [
      { platform: "facebook", link: "#" },
      { platform: "instagram", link: "#" },
      { platform: "twitter", link: "#" }
    ]
  },
  {
    name: "Danielle Bryant",
    position: "Kids Teacher",
    image: "assets/img/team/team12.png",
    social: [
      { platform: "facebook", link: "#" },
      { platform: "instagram", link: "#" },
      { platform: "twitter", link: "#" }
    ]
  }
]

function Teacher() {
  return (
    <>
      <section className="team-area fix p-relative pt-120 pb-80" style={{ background: "#f7f9ff" }}>
        <div className="animations-06">
          <img src="assets/img/bg/an-img-17.png" alt="an-img-01" />
        </div>
        <div className="animations-09">
          <img src="assets/img/bg/slider_shape03.png" alt="contact-bg-an-01" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-relative">
              <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                <h5>
                  <i className="fal fa-graduation-cap" /> Our Teacher
                </h5>
                <h2>Our Expert Teacher</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {teachers.map((teacher, index) => (
              <div key={index} className="col-xl-3 col-md-6">
                <div className="single-team mb-40">
                  <div className="team-thumb">
                    <div className="brd">
                      <Link to="/team-single">
                        <img src={teacher.image} alt="img" />
                      </Link>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <Link to="/team-single">{teacher.name}</Link>
                    </h4>
                    <p>{teacher.position}</p>
                    <div className="team-social">
                      <ul>
                        {teacher.social.map((platform, index) => (
                          <li key={index}>
                            <Link to={platform.link}>
                              {platform.platform === 'facebook' && <i className="fab fa-facebook-f" />}
                              {platform.platform === 'instagram' && <i className="fab fa-instagram" />}
                              {platform.platform === 'twitter' && <i className="fab fa-twitter" />}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Teacher