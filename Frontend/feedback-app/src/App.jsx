import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Studioform from "./Pages/Studioform";
import Landingpage from './pages/Landingpage';
import Trainingfbform from './pages/Trainingfbform';
import CoworkingForm from './pages/Coworkingform';
import ConferenceHall from './pages/ConferenceHall';
import BusinessSolutions from './pages/BusinessSolutions';
<<<<<<< HEAD
=======
import Dashboard from './pages/Dashboard';
>>>>>>> ca01d73f73f5e185524114143b7cf75c05ecb7b3

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/training" element={<Trainingfbform/>} />
        <Route path="/studio" element={<Studioform />} />
        <Route path="/cowork" element={<CoworkingForm/>}/>
        <Route path="/conference" element={<ConferenceHall/>}/>
        <Route path="/business" element={<BusinessSolutions/>}/>
<<<<<<< HEAD
=======
        <Route path="/dashboard" element={<Dashboard/>}/>
>>>>>>> ca01d73f73f5e185524114143b7cf75c05ecb7b3
      </Routes>
    </Router>
    
  )
}

export default App