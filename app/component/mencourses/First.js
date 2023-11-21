import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  const courses = [
    {
      imgSrc: 'assets/img/bg/couress-img-1.jpg',
      category: 'Sciences',
      title: 'Biochemistry',
      description:
        'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    },
    {
      imgSrc: 'assets/img/bg/couress-img-2.jpg',
      category: 'Economics',
      title: 'Major in Economics',
      description:
        'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    },
    {
      imgSrc: 'assets/img/bg/couress-img-3.jpg',
      category: 'Media',
      title: 'Business Media',
      description:
        'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    },
    {
      imgSrc: 'assets/img/bg/couress-img-4.jpg',
      category: 'Public',
      title: 'Public Administration',
      description:
        'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    },
    {
      imgSrc: 'assets/img/bg/couress-img-5.jpg',
      category: 'Sciences',
      title: 'Biotechnology',
      description:
        'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    },
    {
      imgSrc: 'assets/img/bg/couress-img-6.jpg',
      category: 'Finance',
      title: 'Corporate Finance',
      description:
        'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    },
  ];

  return (
    <>
      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <h6 className="mt-20 mb-50">Showing 1–9 of 10 results</h6>
            </div>
            <div className="col-lg-6 col-sm-6 text-right">
              <select name="orderby" className="orderby" aria-label="Shop order">
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <div className="row align-items-center">
            {courses.map((course, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="courses-item mb-30 hover-zoomin">
                  <div className="thumb fix">
                    <Link to="/single-courses">
                      <img src={course.imgSrc} alt="course-img" />
                    </Link>
                  </div>
                  <div className="courses-content">
                    <div className="cat">
                      <i className="fal fa-graduation-cap" /> {course.category}
                    </div>
                    <h3>
                      <Link to="/single-courses">{course.title}</Link>
                    </h3>
                    <p>{course.description}</p>
                    <Link to="/single-courses" className="readmore">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                  <div className="icon">
                    <img src="assets/img/icon/cou-icon.png" alt="icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="pagination-wrap mt-20 text-center">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <Link to="#">
                        <i className="fas fa-angle-double-left" />
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link to="#">1</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">2</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">3</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">...</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">10</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">
                        <i className="fas fa-angle-double-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>
    </>
  );
}

export default First;