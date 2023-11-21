import React from 'react'
import { Link } from 'react-router-dom'

const teachers = [
  {
    name: 'Howard Holmes',
    role: 'CEO & Founder',
    image: 'assets/img/team/team01.jpg',
  },
  {
    name: 'Ella Thompson',
    role: 'Kids Teacher',
    image: 'assets/img/team/team02.jpg',
  },
  {
    name: 'Vincent Cooper',
    role: 'Kids Teacher',
    image: 'assets/img/team/team03.jpg',
  },
  {
    name: 'Danielle Bryant',
    role: 'Kids Teacher',
    image: 'assets/img/team/team04.jpg',
  },
];

function Expert() {
  return (
    <>
      <section className="team-area2 fix p-relative pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-relative">
              <div className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s">
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
                    <p>{teacher.role}</p>
                    <div className="team-social">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
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
  );
}

export default Expert;
