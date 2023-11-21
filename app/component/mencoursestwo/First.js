import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  return (
    <>
        <section className="shop-area pt-120 pb-120 p-relative " data-animation="fadeInUp animated" data-delay=".2s" >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <h6 className="mt-20 mb-50">Showing 1–9 of 10 results</h6>
              </div>
              <div className="col-lg-6 col-sm-6 text-right">
                <select name="orderby" className="orderby" aria-label="Shop order">
                  <option value="menu_order">
                    Default sorting
                  </option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
              </div>
            </div>
            <div className="row align-items-center class-scroll">
              <div className="col-lg-4 col-md-6 ">
                
                <div className="class-item mb-30">
                
                  <div className="class-img">
                    <div className="class-img-outer">
                      <Link to="/single-courses-2">
                        {" "}
                        <img src="assets/img/class/class-7.jpg" alt="class image" />
                      </Link>
                      
                      <div className="course-meta">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="author">
                              <div className="thumb">
                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                              </div>
                              <div className="text">
                                <Link to="/single-courses-2">Robto Jone</Link>
                                <p>Teacher</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <img src="assets/img/bg/star.png" alt="image" />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                
                  
                  <ul className="schedule">
                    <li>
                      <span>Age:</span>
                      <span className="class-age">5-10 Years</span>
                    </li>
                    <li>
                      <span>Time:</span>
                      <span className="class-size">8-10am</span>
                    </li>
                    <li>
                      <span>Class Size:</span>
                      <span className="class-size">28</span>
                    </li>
                    <li>
                      <span>Fee:</span>
                      <span className="class-size">$50</span>
                    </li>
                  </ul>
                  
                  
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/single-courses">Languge Class</Link>
                    </h4>
                    <p>
                      Seamlessly visualize quality ellectual capital without superior
                      collaboration and idea.
                    </p>
                  </div>
                 
                </div>
                
              </div>
              <div className="col-lg-4 col-md-6 ">
                
                <div className="class-item mb-30">
                
                  <div className="class-img">
                    <div className="class-img-outer">
                      <Link to="/single-courses-2">
                        {" "}
                        <img src="assets/img/class/class-8.jpg" alt="class image" />
                      </Link>
                      
                      <div className="course-meta">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="author">
                              <div className="thumb">
                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                              </div>
                              <div className="text">
                                <Link to="/single-courses-2">Robto Jone</Link>
                                <p>Teacher</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <img src="assets/img/bg/star.png" alt="image" />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                
                  
                  <ul className="schedule">
                    <li>
                      <span>Age:</span>
                      <span className="class-age">5-10 Years</span>
                    </li>
                    <li>
                      <span>Time:</span>
                      <span className="class-size">8-10am</span>
                    </li>
                    <li>
                      <span>Class Size:</span>
                      <span className="class-size">28</span>
                    </li>
                    <li>
                      <span>Fee:</span>
                      <span className="class-size">$50</span>
                    </li>
                  </ul>
                  
                  
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/single-courses">Drawing Class</Link>
                    </h4>
                    <p>
                      Seamlessly visualize quality ellectual capital without superior
                      collaboration and idea.
                    </p>
                  </div>
                 
                </div>
                
              </div>
              <div className="col-lg-4 col-md-6 ">
                
                <div className="class-item mb-30">
                
                  <div className="class-img">
                    <div className="class-img-outer">
                      <Link to="/single-courses-2">
                        {" "}
                        <img src="assets/img/class/class-9.jpg" alt="class image" />
                      </Link>
                      
                      <div className="course-meta">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="author">
                              <div className="thumb">
                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                              </div>
                              <div className="text">
                                <Link to="/single-courses-2">Robto Jone</Link>
                                <p>Teacher</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <img src="assets/img/bg/star.png" alt="image" />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                
                  
                  <ul className="schedule">
                    <li>
                      <span>Age:</span>
                      <span className="class-age">5-10 Years</span>
                    </li>
                    <li>
                      <span>Time:</span>
                      <span className="class-size">8-10am</span>
                    </li>
                    <li>
                      <span>Class Size:</span>
                      <span className="class-size">28</span>
                    </li>
                    <li>
                      <span>Fee:</span>
                      <span className="class-size">$50</span>
                    </li>
                  </ul>
                  
                  
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/single-courses">Mathematics Class</Link>
                    </h4>
                    <p>
                      Seamlessly visualize quality ellectual capital without superior
                      collaboration and idea.
                    </p>
                  </div>
                 
                </div>
                
              </div>
              <div className="col-lg-4 col-md-6 ">
                
                <div className="class-item mb-30">
                
                  <div className="class-img">
                    <div className="class-img-outer">
                      <Link to="/single-courses-2">
                        {" "}
                        <img src="assets/img/class/class-10.jpg" alt="class image" />
                      </Link>
                      
                      <div className="course-meta">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="author">
                              <div className="thumb">
                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                              </div>
                              <div className="text">
                                <Link to="/single-courses-2">Robto Jone</Link>
                                <p>Teacher</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <img src="assets/img/bg/star.png" alt="image" />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                
                  
                  <ul className="schedule">
                    <li>
                      <span>Age:</span>
                      <span className="class-age">5-10 Years</span>
                    </li>
                    <li>
                      <span>Time:</span>
                      <span className="class-size">8-10am</span>
                    </li>
                    <li>
                      <span>Class Size:</span>
                      <span className="class-size">28</span>
                    </li>
                    <li>
                      <span>Fee:</span>
                      <span className="class-size">$50</span>
                    </li>
                  </ul>
                  
                  
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/single-courses">Web Design Class</Link>
                    </h4>
                    <p>
                      Seamlessly visualize quality ellectual capital without superior
                      collaboration and idea.
                    </p>
                  </div>
                 
                </div>
                
              </div>
              <div className="col-lg-4 col-md-6 ">
                
                <div className="class-item mb-30">
                
                  <div className="class-img">
                    <div className="class-img-outer">
                      <Link to="/single-courses-2">
                        {" "}
                        <img src="assets/img/class/class-11.jpg" alt="class image" />
                      </Link>
                      
                      <div className="course-meta">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="author">
                              <div className="thumb">
                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                              </div>
                              <div className="text">
                                <Link to="/single-courses-2">Robto Jone</Link>
                                <p>Teacher</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <img src="assets/img/bg/star.png" alt="image" />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                
                  
                  <ul className="schedule">
                    <li>
                      <span>Age:</span>
                      <span className="class-age">5-10 Years</span>
                    </li>
                    <li>
                      <span>Time:</span>
                      <span className="class-size">8-10am</span>
                    </li>
                    <li>
                      <span>Class Size:</span>
                      <span className="class-size">28</span>
                    </li>
                    <li>
                      <span>Fee:</span>
                      <span className="class-size">$50</span>
                    </li>
                  </ul>
                  
                  
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/single-courses">HTMl Develpment Class</Link>
                    </h4>
                    <p>
                      Seamlessly visualize quality ellectual capital without superior
                      collaboration and idea.
                    </p>
                  </div>
                 
                </div>
                
              </div>
              <div className="col-lg-4 col-md-6 ">
                
                <div className="class-item mb-30">
                
                  <div className="class-img">
                    <div className="class-img-outer">
                      <Link to="/single-courses-2">
                        {" "}
                        <img src="assets/img/class/class-12.jpg" alt="class image" />
                      </Link>
                      
                      <div className="course-meta">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <div className="author">
                              <div className="thumb">
                                <img src="assets/img/bg/testi_avatar.png" alt="image" />
                              </div>
                              <div className="text">
                                <Link to="/single-courses-2">Robto Jone</Link>
                                <p>Teacher</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <img src="assets/img/bg/star.png" alt="image" />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                
                  
                  <ul className="schedule">
                    <li>
                      <span>Age:</span>
                      <span className="class-age">5-10 Years</span>
                    </li>
                    <li>
                      <span>Time:</span>
                      <span className="class-size">8-10am</span>
                    </li>
                    <li>
                      <span>Class Size:</span>
                      <span className="class-size">28</span>
                    </li>
                    <li>
                      <span>Fee:</span>
                      <span className="class-size">$50</span>
                    </li>
                  </ul>
                  
                  
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/single-courses">Digital Marketing Class</Link>
                    </h4>
                    <p>
                      Seamlessly visualize quality ellectual capital without superior
                      collaboration and idea.
                    </p>
                  </div>
                 
                </div>
                
              </div>
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
  )
}

export default First