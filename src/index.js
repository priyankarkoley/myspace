import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./index.css";
import App from "./components/App";

import About from './components/About';
import Folio from './components/Folio';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/myspace' element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="folio" element={<Folio />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);