import React from 'react'
import Navbar from './Navbar';

export default function Contact(props) {
  let isLightMode = props.mode;
  let setIsLightMode = props.setmode;
  return (
    <div>
    <Navbar  mode={isLightMode} setmode = {setIsLightMode}/>
      Contact Me
    </div>
  )
}
