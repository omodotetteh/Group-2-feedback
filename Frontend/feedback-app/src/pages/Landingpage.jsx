import React from 'react'
import Header from '../components/Header';
import Main from '../components/Article';
import GeneralFeedback from '../components/GeneralFeedback';
import Midsection from '../components/Midsection';
import Cardcontainer from '../components/Cardcontainer';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Landingpage() {
  return (
    <div>
      <ScrollToTop/>
      <Header />
      <Main />
      <GeneralFeedback />
      <Midsection />
      <Cardcontainer/>
      <Footer/>
    </div>
  )
}

export default Landingpage;