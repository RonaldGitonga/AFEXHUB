import React from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menerror/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="404 Error"/>
        <First/>
    </>
  )
}

export default Main