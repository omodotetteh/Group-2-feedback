import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import CoworkingForm from "./pages/Coworkingform";
import StudioForm from "./pages/Studioform"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="cowork" element={<CoworkingForm/>}/>
        <Route path="studio" element={<StudioForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
