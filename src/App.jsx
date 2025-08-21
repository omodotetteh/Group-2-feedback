import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Studioform from "./Pages/Studioform";
import Landingpage from './pages/Landingpage';
import Trainingfbform from './pages/Trainingfbform';
import CoworkingForm from './pages/Coworkingform';
import ConferenceHall from './pages/ConferenceHall';
import BusinessSolutions from './pages/BusinessSolutions';
import Dashboard from './pages/Dashboard';
import Feedback from './pages/Feedback';
import Studio from './pages/Studio';
import Workspace from './pages/Workspace';
import Hall from './pages/Hall';
import Solution from './pages/Solution';
import School from './pages/School';
import Settings from './pages/Settings';

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
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/school" element={<School/>}/>
        <Route path="/studios" element={<Studio/>}/>
        <Route path="/hall" element={<Hall/>}/>
        <Route path="/solution" element={<Solution/>}/>
        <Route path="/workspace" element={<Workspace/>}/>
        <Route path="/settings" element={<Settings/>}/>

      </Routes>
    </Router>
    
  )
}

export default App