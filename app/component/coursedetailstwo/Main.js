import React from 'react'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'
import Brand from '../menhomethree/Brand'
import First from '../mencoursedetailstwo/First'

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