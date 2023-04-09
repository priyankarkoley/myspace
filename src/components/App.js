import React, { useState } from "react";
import Home from './Home'

export default function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    <Home mode={isLightMode} setmode={setIsLightMode} />
  );
}