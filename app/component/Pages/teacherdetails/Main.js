import React from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menteacherdetails/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="Teacher Details"/>
        <First/>
    </>
  )
}

export default Main