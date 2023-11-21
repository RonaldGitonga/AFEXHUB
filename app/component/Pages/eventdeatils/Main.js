import React from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Brand from '../../menhomethree/Brand'
import First from '../meneventdeatils/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="Event Details"/>
        <First/>
        <Brand/>
    </>
  )
}

export default Main