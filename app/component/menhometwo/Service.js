import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    image: 'assets/img/icon/sve-icon1.png',
    title: 'Education Services',
    description:
      'Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products.',
  },
  {
    id: 2,
    image: 'assets/img/icon/sve-icon2.png',
    title: 'Expert Teachers',
    description:
      'Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products.',
  },
  {
    id: 3,
    image: 'assets/img/icon/sve-icon3.png',
    title: 'Music & Art',
    description:
      'Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products.',
  },
];

function Service() {
  return (
    <>
        <section className="service-details-one pt-120 pb-90 p-relative fix" style={{background: 'url(assets/img/bg/feature-bg.png) no-repeat', backgroundSize: 'cover',}}>
        <div className="container">
            <div className="row">
            {services.map((service) => (
                <div key={service.id} className="col-lg-4 col-md-6 col-sm-12">
                <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="sr-contner">
                    <div className="icon">
                        <img src={service.image} alt="icon01" />
                    </div>
                    <div className="text">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
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