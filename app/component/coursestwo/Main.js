import React from 'react'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'
import First from '../mencoursestwo/First'
import Brand from '../menhomethree/Brand'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="Courses Two"/>
        <First/>
        <Brand/>
    </>
  )
}

export default Main