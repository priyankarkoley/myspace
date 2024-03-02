import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react'
import Home from './Home'
import About from './About';
import Navbar from './Navbar';
import Folio from './Folio';
import Contact from './Contact';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    <Router>
      <Navbar mode={isLightMode} setmode={setIsLightMode} />
      <Routes>
        <Route path='/' element={<Home mode={isLightMode}  />} />
          <Route path="about" element={<About mode={isLightMode}  />} />
          <Route path="folio" element={<Folio mode={isLightMode}  />} />
          <Route path="contact" element={<Contact mode={isLightMode}  />} />
      </Routes>
    </Router>
  );
}