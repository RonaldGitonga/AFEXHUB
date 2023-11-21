import React from 'react'
import Headerone from '../headerone/Main'
import About from '../menhome/About'
import Courses from '../menhome/Courses'
import Event from '../menhome/Event'
import Scholarship from '../menhome/Scholarship'
import Shep from '../menhome/Shep'
import Slider from '../menhome/Sliderone'
import Frequently from '../menhome/Frequently'
import Video from '../menhome/Video'
import Testimonial from '../menhome/Testimonial'
import Search from '../menhome/Search'
import Admission from '../menhome/Admission'
import Redslider from '../menhome/Redslider'
import Blog from '../menhome/Blog'
import Subscribe from '../menhome/Subscribe'

function Main() {
  return (
    <>  
        <Headerone/>
        <Slider/>
        <About/>
        <Courses/>
        <Shep/>
        <Event/>
        <Scholarship/>
        <Frequently/>
        <Video/>
        <Testimonial/>
        <Search/>
        <Admission/>
        <Redslider/>
        <Blog/>
        <Subscribe/>
    </>
  )
}

export default Main