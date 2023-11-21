import React from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: '$150',
    features: [
      'Aliquam quis justo at lorem',
      'Fusce sodales, urna et tempus',
      'Vestibulum blandit lorem quis',
      'Orci varius natoque penatibus',
      'Aliquam a nisl congue, auctor',
    ],
  },
  {
    name: 'Standard',
    price: '$200',
    features: [
      'Aliquam quis justo at lorem',
      'Fusce sodales, urna et tempus',
      'Vestibulum blandit lorem quis',
      'Orci varius natoque penatibus',
      'Aliquam a nisl congue, auctor',
    ],
  },
  {
    name: 'Unlimited',
    price: '$350',
    features: [
      'Aliquam quis justo at lorem',
      'Fusce sodales, urna et tempus',
      'Vestibulum blandit lorem quis',
      'Orci varius natoque penatibus',
      'Aliquam a nisl congue, auctor',
    ],
  },
];

function First() {
  return (
    <>
        <section id="pricing" className="pricing-area pt-150 pb-60 fix p-relative">
        <div className="container">
            <div className="row">
            {plans.map((plan) => (
                <div className="col-lg-4 col-md-6" key={plan.name}>
                <div className="pricing-box pricing-box2 mb-60">
                    <div className="pricing-head text-center">
                    <h3>{plan.name}</h3>
                    <div className="price-count">
                        <h2>
                        {plan.price} <strong>/ Per Month Fee</strong>
                        </h2>
                    </div>
                    <p>Proin vehicula elit a dui rutrum, ac posuere magna auctor.</p>
                    <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                    <ul>
                        {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    </div>
                    <div className="pricing-btn">
                    <Link to="/contact" className="btn ss-btn">
                        Join Now <i className="fal fa-long-arrow-right" />
                    </Link>
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

export default First;
