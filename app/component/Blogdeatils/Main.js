import React from 'react'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'
import First from '../menblogdeatils/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="Blog Details"/>
        <First/>
    </>
  )
}

export default Main