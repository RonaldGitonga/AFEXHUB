import React from 'react'

function Shep() {
    
  const features = [
    {
      icon: 'assets/img/icon/fea-icon01.png',
      title: 'Skilled Teachers',
      description:
        'Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry, prayers, or readings from.',
    },
    {
      icon: 'assets/img/icon/fea-icon02.png',
      title: 'Affordable Courses',
      description:
        'Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry, prayers, or readings from.',
    },
    {
      icon: 'assets/img/icon/fea-icon03.png',
      title: 'Efficient & Flexible',
      description:
        'Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry, prayers, or readings from.',
    },
  ];

  return (
    <>
      <section className="steps-area p-relative" style={{ backgroundColor: '#032e3f' }}>
        <div className="animations-10">
          <img src="assets/img/bg/an-img-10.png" alt="an-img-01" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title mb-35 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s">
                <h2>Our Best Features</h2>
                <p>
                  Special wedding garments are often worn, and the ceremony is
                  sometimes followed by a wedding reception. Music, poetry.
                </p>
              </div>
              <ul className="pr-20">
                {features.map((feature) => (
                  <li key={feature.icon}>
                    <div className="step-box wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s">
                      <div className="dnumber">
                        <div className="date-box">
                          <img src={feature.icon} alt="icon" />
                        </div>
                      </div>
                      <div className="text">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="step-img wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                <img src="assets/img/bg/steps-img.png" alt="class image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shep;
