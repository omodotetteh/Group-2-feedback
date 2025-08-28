import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Studioform from "./pages/Studioform";
import Landingpage from './pages/Landingpage';
import Trainingfbform from './pages/Trainingfbform';
import CoworkingForm from './pages/Coworkingform';
import ConferenceHall from './pages/ConferenceHall';
import BusinessSolutions from './pages/BusinessSolutions';
import Dashboard from './pages/Dashboard';


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
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    
  )
}

export default App