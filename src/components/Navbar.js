import React, { useState } from "react";
import Menu from "./Menu.js";
import dp from "../images/dp_rounded.jpeg";

export default function Navbar() {
  const [isExpanded, setisExpanded] = useState(true);
  let ClickHam = () => {setisExpanded(!isExpanded);};
  return (
    <>
      <div className="sticky top-0 ">
        {" "}
        {/*parent*/}
        {/* NAVBAR Begin*/}
        <div className="flex w-full items-center bg-[#305fa9b4] backdrop-blur">
          <span
            onClick={ClickHam}
            className="ml-3 material-symbols-outlined sm:hidden"
          >
            {isExpanded?'expand_less':'menu'}
          </span>
          <div className="ml-2 pl-3 text-xl py-3 sm:ml-3 md:ml-5 lg:ml-7 xl:ml-12 2xl:text-2xl">
            Priyankar's Page
          </div>
          <div className="sm:hidden ml-auto mr-3 p-2">
            <img className="h-9 rounded-full" src={dp} alt="me" />
          </div>
          <div className="hidden sm:flex ml-auto mr-5 2xl:text-lg space-x-5 md:mr-10 lg:mr-12 xl:mr-20 2xl:mr-32 md:space-x-10 lg:space-x-16 2xl:space-x-24">
            <div className="text-center">Home</div>
            <div className="text-center">About Me</div>
            <div className="text-center">Folio</div>
            <div className="text-center">Resume</div>
            <div className="text-center">Contact Me</div>
          </div>
        </div>
        {/* NAVBAR End*/}
        {isExpanded && <Menu />}
      </div>
    </>
  );
}
