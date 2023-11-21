import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    date: '20 March, 2023',
    title: 'Basic UI & UX Design for new development',
    image: 'assets/img/bg/evn-img-1.jpg',
    description:
      'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    time: '3:30 pm - 4:30 pm',
  },
  {
    id: 2,
    date: '20 March, 2023',
    title: 'Digital Education Market Briefing: Minnesota 2023',
    image: 'assets/img/bg/evn-img-2.jpg',
    description:
      'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    time: '3:30 pm - 4:30 pm',
  },
  {
    id: 3,
    date: '22 March, 2023',
    title: 'Learning Network Webinars for Music Teachers',
    image: 'assets/img/bg/evn-img-3.jpg',
    description:
      'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    time: '3:30 pm - 4:30 pm',
  },
  {
    id: 4,
    date: '22 March, 2023',
    title: 'Next-Gen Higher Education Students Have Arrived?',
    image: 'assets/img/bg/evn-img-4.jpg',
    description:
      'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    time: '3:30 pm - 4:30 pm',
  },
  {
    id: 5,
    date: '24 March, 2023',
    title: 'Digital Art & 3D Model – a future for film company',
    image: 'assets/img/bg/evn-img-5.jpg',
    description:
      'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    time: '3:30 pm - 4:30 pm',
  },
  {
    id: 6,
    date: '29 March, 2023',
    title: 'Conscious Discipline Summer Institute',
    image: 'assets/img/bg/evn-img-6.jpg',
    description:
      'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
    time: '3:30 pm - 4:30 pm',
  },
];

function First() {
  return (
    <>
      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            {events.map((event) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                key={event.id}
              >
                <div className="event-item mb-30 hover-zoomin">
                  <div className="thumb">
                    <Link to="/single-event">
                      <img src={event.image} alt="contact-bg-an-01" />
                    </Link>
                  </div>
                  <div className="event-content">
                    <div className="date">{event.date}</div>
                    <h3>
                      <Link to="/single-event">{event.title}</Link>
                    </h3>
                    <p>{event.description}</p>
                    <div className="time">
                      {event.time} <i className="fal fa-long-arrow-right" />{' '}
                      <strong>United Kingdom</strong>
                    </div>
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