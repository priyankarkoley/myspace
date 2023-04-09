import React, { useState } from "react";
import Menu from "./Menu.js";
import dp from "../images/dp_rounded.jpeg";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [isExpanded, setisExpanded] = useState(false);

  let isLightMode = props.mode;
  let setLightMode = props.setmode;
  let toggleTheme = () => {
    setLightMode(!isLightMode);
  };

  let clickHam = () => {
    setisExpanded(!isExpanded);
  };

  return (
    <span className={!isLightMode && "dark"}>
      <div className="sticky top-0 bg-[#367bc9a8] shadow-lg dark:shadow-sm dark:shadow-white dark:bg-[#395B64f3]">
        {" "}
        {/*parent*/}
        {/* NAVBAR Begin*/}
        <div className="flex w-full items-center pt-[0.072rem]  backdrop-blur">
          <button
            onClick={clickHam}
            className="ml-3 material-symbols-outlined sm:hidden"
          >
            {isExpanded ? "expand_less" : "menu"}
          </button>
          <Link
            to="/myspace"
            className="ml-2 pl-3 text-xl py-3 sm:ml-2 md:ml-6 lg:ml-12 xl:ml-16 2xl:ml-20 2xl:text-2xl dark:text-[#A5C9CA] dark:hover:text-white hover:cursor-pointer"
          >
            Priyankar's Page
          </Link>

          <button
            onClick={toggleTheme}
            className="sm:hidden ml-auto p-2 py-auto material-symbols-outlined"
          >
            {isLightMode ? "dark_mode" : "light_mode"}
          </button>
          <Link to="/myspace" className="sm:hidden mr-3 p-2">
            <img className="h-9 rounded-full" src={dp} alt="me" />
          </Link>
          <div className="hidden sm:flex ml-auto mr-5 2xl:text-lg space-x-5 md:mr-10 lg:mr-12 xl:mr-20 2xl:mr-32 md:space-x-10 lg:space-x-16 2xl:space-x-24">
            <Link
              to="/myspace"
              className="text-center hover:shadow-md hover:text-white hover:cursor-pointer hover:underline hover:underline-offset-4 dark:text-[#A5C9CA] dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-center hover:shadow-md hover:text-white hover:cursor-pointer hover:underline hover:underline-offset-4 dark:text-[#A5C9CA] dark:hover:text-white"
            >
              About Me
            </Link>
            <Link
              to="/folio"
              className="text-center hover:shadow-md hover:text-white hover:cursor-pointer hover:underline hover:underline-offset-4 dark:text-[#A5C9CA] dark:hover:text-white"
            >
              Folio
            </Link>
            <a
              rel="noreferrer"
              href="https://flowcv.com/resume/8ls7tq49ju"
              target="_blank"
              className="text-center hover:shadow-md hover:text-white hover:cursor-pointer hover:underline hover:underline-offset-4 dark:text-[#A5C9CA] dark:hover:text-white"
            >
              Resume
            </a>
            <Link
              to="/contact"
              className="text-center hover:shadow-md hover:text-white hover:cursor-pointer hover:underline hover:underline-offset-4 dark:text-[#A5C9CA] dark:hover:text-white"
            >
              Contact Me
            </Link>
            <button
              onClick={toggleTheme}
              className="ml-16 hover:text-white material-symbols-outlined dark:text-[#A5C9CA] dark:hover:text-white"
            >
              {isLightMode ? "dark_mode" : "light_mode"}
            </button>
          </div>
        </div>
        {/* NAVBAR End*/}
        {isExpanded && <Menu />}
      </div>
    </span>
  );
}
