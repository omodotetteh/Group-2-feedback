import React from 'react'
import Header from '../components/Header';
import Main from '../components/Article';
<<<<<<< HEAD
import GeneralFeedback from '../components/GeneralFeedback';
=======
import FeedbackForm from '../components/FeedbackForm';
>>>>>>> ca01d73f73f5e185524114143b7cf75c05ecb7b3
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
<<<<<<< HEAD
      <GeneralFeedback />
=======
      <FeedbackForm />
>>>>>>> ca01d73f73f5e185524114143b7cf75c05ecb7b3
      <Midsection />
      <Cardcontainer/>
      <Footer/>
    </div>
  )
}

export default Landingpage;