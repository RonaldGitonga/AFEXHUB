import React from 'react'
import Bredcom from '../Bredcom/Main'
import Header from '../headerone/Main'
import First from '../mencoursedetails/First'
import Brand from '../menhomethree/Brand'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="Course Details" />
        <First/>
        <Brand/>
    </>
  )
}

export default Main