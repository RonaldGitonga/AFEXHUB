import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Footer from '../component/footer/Main'
import Hometwo from '../component/hometwo/Main'
import Homethree from '../component/homethree/Main'
import About from '../component/About/Main'
import Courses from '../component/Courses/Main'
import Coursestwo from '../component/coursestwo/Main'
import Coursesdeatils from '../component/coursedetails/Main'
import Coursesdeatilstwo from '../component/coursedetailstwo/Main'
import Event from '../component/Pages/event/Main'
import Eventdeatils from '../component/Pages/eventdeatils/Main'
import Gallery from '../component/Pages/gallery/Main'
import Pricing from '../component/Pages/Pricing/Main'
import Faq from '../component/Pages/Faq/Main'
import Teacher from '../component/Pages/Teacher/Main'
import Teacherdeatils from '../component/Pages/teacherdetails/Main'
import Error from '../component/Pages/error/Main'
import Blog from '../component/Blog/Main'
import Blogdeatils from '../component/Blogdeatils/Main'
import Contact from '../component/contact/Main'
import Projectdeatils from '../component/Pages/Projectdeatils/Main'
import Home from '../component/home/Main';

function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  return (
    <>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/home-two" element={<Hometwo/>} />
           <Route path="/home-three" element={<Homethree/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/courses" element={<Courses/>} /> 
           <Route path="/courses-2" element={<Coursestwo/>} /> 
           <Route path="/single-courses" element={<Coursesdeatils/>} /> 
           <Route path="/single-courses-2" element={<Coursesdeatilstwo/>} /> 
           <Route path="/event" element={<Event/>} /> 
           <Route path="/single-event" element={<Eventdeatils/>} /> 
           <Route path="/projects" element={<Gallery/>} /> 
           <Route path="/single-projects" element={<Projectdeatils/>} /> 
           <Route path="/pricing" element={<Pricing/>} /> 
           <Route path="/faq" element={<Faq/>} /> 
           <Route path="/team" element={<Teacher/>} /> 
           <Route path="/team-single" element={<Teacherdeatils/>} />  
           <Route path="/404-error" element={<Error/>} /> 
           <Route path="/blog" element={<Blog/>} /> 
           <Route path="/blog-details" element={<Blogdeatils/>} /> 
           <Route path="/contact" element={<Contact/>} /> 
        </Routes>
        <Footer/>
    </>
  )
}

export default Index