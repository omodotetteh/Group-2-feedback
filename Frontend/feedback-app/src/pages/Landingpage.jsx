import React from 'react'
import Header from "../components/Header"
import Body from "../components/Body";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Training from '../components/Card';

function Landingpage() {
  return (
    <div>
      <Header/>
      <Body/>
      <Service/>
      <Training/>
      <Footer/>
    </div>
  )
}

export default Landingpage
