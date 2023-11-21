import React from 'react'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'
import First from '../menblog/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="Blog"/>
        <First/>
    </>
  )
}

export default Main