import React from 'react'
import { Link } from 'react-router-dom'

function Goging() {

  const classes = [
    {
      name: 'Languge Class',
      image: 'assets/img/class/class-1.jpg',
      age: '5-10 Years',
      time: '8-10am',
      size: '28',
      fee: '$50'
    },
    {
      name: 'Drawing Class',
      image: 'assets/img/class/class-2.jpg',
      age: '5-10 Years',
      time: '8-10am',
      size: '28',
      fee: '$50'
    },
    {
      name: 'Mathematics Class',
      image: 'assets/img/class/class-3.jpg',
      age: '5-10 Years',
      time: '8-10am',
      size: '28',
      fee: '$50'
    },
    {
      name: 'Sports Class',
      image: 'assets/img/class/class-4.jpg',
      age: '5-10 Years',
      time: '8-10am',
      size: '28',
      fee: '$50'
    },
    {
      name: 'Knowlage Class',
      image: 'assets/img/class/class-5.jpg',
      age: '5-10 Years',
      time: '8-10am',
      size: '28',
      fee: '$50'
    },
    {
      name: 'Science Class',
      image: 'assets/img/class/class-6.jpg',
      age: '5-10 Years',
      time: '8-10am',
      size: '28',
      fee: '$50'
    }
  ];

  return (
    <>
        <section className="class-area pt-120 pb-120 p-relative fix">
            <div className="animations-06">
                <img src="assets/img/bg/an-img-11.png" alt="an-img-01" />
            </div>
            <div className="animations-11">
                <img src="assets/img/bg/an-img-01.png" alt="contact-bg-an-01" />
            </div>
            <div className="animations-12">
                <img src="assets/img/bg/an-img-12.png" alt="contact-bg-an-01" />
            </div>
            <div className="animations-13">
                <img src="assets/img/bg/an-img-13.png" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="section-title text-center mb-50">
                    <h5>On Going Classes</h5>
                    <h2>Get The Best Classes With Us</h2>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center">
                    {classes.map((cls, index) => (
                        <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="class-item mb-30 hover-zoomin">
                                <div className="class-img">
                                    <div className="class-img-outer">
                                        <Link to="/single-courses">
                                            <img src={cls.image} alt="class image" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="class-content">
                                    <h4 className="title">
                                        <Link to="/single-courses">{cls.name}</Link>
                                    </h4>
                                    <p>
                                        Seamlessly visualize quality ellectual capital without superior
                                        collaboration and idea.
                                    </p>
                                    <ul className="schedule">
                                        <li>
                                            <span>Age:</span>
                                            <span className="class-age">{cls.age}</span>
                                        </li>
                                        <li>
                                            <span>Time:</span>
                                            <span className="class-size">{cls.time}</span>
                                        </li>
                                        <li>
                                            <span>Class Size:</span>
                                            <span className="class-size">{cls.size}</span>
                                        </li>
                                        <li>
                                            <span>Fee:</span>
                                            <span className="class-size">{cls.fee}</span>
                                        </li>
                                    </ul>
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

export default Goging