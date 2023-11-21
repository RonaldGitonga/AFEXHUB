import React from 'react'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'
import Brand from '../menhomethree/Brand'
import Touch from '../mencontact/Touch'
import Map from '../mencontact/Map'
import Form from '../mencontact/Form' 

function Main() {
  return (
    <>
        <Header/>
        <Bredcom title="Home" subtitle="Contact Us"/>
        <Touch/>
        <Map/>
        <Form/>
        <Brand/>
    </>
  )
}

export default Main