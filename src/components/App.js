import Home from './Home';
import React, { useState } from "react";
import Navbar from './Navbar';

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    <>
      <Navbar mode = {isLightMode} setmode = {setIsLightMode}/>
      <Home mode = {isLightMode}/>
    </>
  );
}
export default App;
