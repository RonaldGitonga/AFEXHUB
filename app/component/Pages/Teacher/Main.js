import React from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Brand from '../../menhomethree/Brand'
import First from '../menteacher/First'
import Expert from '../../menhomethree/Expert'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="Our Tutors"/>
        <First/>
        <Brand/>
        <Expert/>
    </>
  )
}

export default Main