import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Studioform from "./Pages/Studioform";
import Landingpage from './Pages/Landingpage';
import Trainingfbform from './pages/Trainingfbform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/training" element={<Trainingfbform />} />
        <Route path="/studio" element={<Studioform />} />
      </Routes>
    </Router>
    
  )
}

export default App