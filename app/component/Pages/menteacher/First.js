import React from 'react'
import { Link } from 'react-router-dom'

function First() {
    const teamMembers = [
        { name: "Howard Holmes", role: "CEO & Founder", image: "assets/img/team/team09.png" },
        { name: "Ella Thompson", role: "Kids Teacher", image: "assets/img/team/team10.png" },
        { name: "Vincent Cooper", role: "Kids Teacher", image: "assets/img/team/team11.png" },
        { name: "Danielle Bryant", role: "Kids Teacher", image: "assets/img/team/team12.png" },
    ];

    return (
        <>
            <section className="team-area fix p-relative pt-150 pb-80" style={{ background: "#f7f9ff" }}>
                <div className="animations-06">
                    <img src="assets/img/bg/an-img-17.png" alt="an-img-01" />
                </div>
                <div className="animations-09">
                    <img src="assets/img/bg/slider_shape03.png" alt="contact-bg-an-01" />
                </div>
                <div className="container">
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-xl-3 col-md-6">
                                <div className="single-team mb-40">
                                    <div className="team-thumb">
                                        <div className="brd">
                                            <Link to="/team-single">
                                                {" "}
                                                <img src={member.image} alt="img" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h4>
                                            <Link to="/team-single">{member.name}</Link>
                                        </h4>
                                        <p>{member.role}</p>
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
                                                    {" "}
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
    )
}

export default First
