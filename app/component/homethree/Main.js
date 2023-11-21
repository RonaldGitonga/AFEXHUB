import React from 'react'
import Header from '../headerthree/Main'
import Slider from '../menhomethree/Slider'
import Service from '../menhomethree/Service'
import About from '../menhomethree/About'
import Going from '../menhomethree/Going'
import Videothree from '../menhomethree/Videothree'
import Expert from '../menhomethree/Expert'
import Brand from '../menhomethree/Brand'
import Recent from '../menhomethree/Recent'
import Testimonialthree from '../menhomethree/Testimonialthree'
import Blogthree from '../menhomethree/Blogthree'

function Main() {
  return (
    <>
        <Header/>
        <Slider/>
        <Service/>
        <About/>
        <Going/>
        <Videothree/>
        <Expert/>
        <Brand/>
        <Recent/>
        <Testimonialthree/>
        <Blogthree/>
    </>
  )
}

export default Main