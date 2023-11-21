import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Education Services',
    image: 'assets/img/icon/sve-icon7.png',
    link: '/about',
    description: 'Seamlessly visualize quality intellectual capital without superior.',
  },
  {
    title: 'Academics',
    image: 'assets/img/icon/sve-icon8.png',
    link: '/about',
    description: 'Seamlessly visualize quality intellectual capital without superior.',
  },
  {
    title: 'Athletics',
    image: 'assets/img/icon/sve-icon9.png',
    link: '/about',
    description: 'Seamlessly visualize quality intellectual capital without superior.',
  },
  {
    title: 'School Life',
    image: 'assets/img/icon/sve-icon10.png',
    link: '/about',
    description: 'Seamlessly visualize quality intellectual capital without superior.',
  },
];

function Service() {
  return (
    <>
      <section className="service-details-three p-relative fix z-class-two">
        <div className="container">
          <div className="row sbox">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                  <div className="sr-contner">
                    <div className="icon">
                      <img src={service.image} alt={`icon${index}`} />
                    </div>
                    <div className="text">
                      <h3>
                        <Link to={service.link}>{service.title}</Link>
                      </h3>
                      <p>{service.description}</p>
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

export default Service;
