import React from 'react'
import Bredcom from '../Bredcom/Main'
import Header from '../headerone/Main'
import First from '../mencourses/First'
import Brand from '../menhomethree/Brand'


function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="Courses"/>
        <First/>
        <Brand/>
    </>
  )
}

export default Main