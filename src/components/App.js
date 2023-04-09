import React, { useState } from "react";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Folio from './Folio';
import Contact from './Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    <>
      <Navbar mode = {isLightMode} setmode = {setIsLightMode}/>
      <Router>
        <Routes>
          <Route path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/folio"><Folio /></Route>
          <Route path="/contact"><Contact /></Route>
        </Routes>
      </Router>

      <Home mode = {isLightMode}/>
      <About/>
      <Home/>
      <Contact/>
    </>
  );
}
export default App;
