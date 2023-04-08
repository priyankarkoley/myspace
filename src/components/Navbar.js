import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center bg-[#2d60ea80]">
        <span className="ml-3 material-symbols-outlined sm:hidden">menu</span>

        <div className="ml-2 pl-3 text-xl py-3 sm:ml-3 md:ml-5 lg:ml-7 xl:ml-12 2xl:text-2xl">
          Priyankar's Page
        </div>

        <div className="hidden ml-auto mr-5 2xl:text-lg sm:flex space-x-5 md:mr-10 lg:mr-12 xl:mr-20 2xl:mr-32 md:space-x-10 lg:space-x-16 2xl:space-x-24">
          <div className="text-center">Home</div>
          <div className="text-center">About Me</div>
          <div className="text-center">Folio</div>
          <div className="text-center">Resume</div>
          <div className="text-center">Contact Me</div>
        </div>
      </div>
    </>
  );
}
