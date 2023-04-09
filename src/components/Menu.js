import React from 'react'

export default function Menu() {
  return (
    <>
      <div className="absolute top-[3.3rem] w-full sm:hidden">
        <div className="bg-[#305fa9b4] text-lg border-b border-cyan-500 backdrop-blur py-[0.73rem] pl-14">
          Home
        </div>
        <div className="bg-[#305fa9b4] text-lg border-b border-cyan-500 backdrop-blur py-[0.73rem] pl-14">
          About Me
        </div>
        <div className="bg-[#305fa9b4] text-lg border-b border-cyan-500 backdrop-blur py-[0.73rem] pl-14">
          Folio
        </div>
        <div className="bg-[#305fa9b4] text-lg border-b border-cyan-500 backdrop-blur py-[0.73rem] pl-14">
          Resume
        </div>
        <div className="bg-[#305fa9b4] text-lg border-b border-cyan-500 backdrop-blur py-[0.73rem] pl-14">
          Contact Me
        </div>
      </div>
    </>
  )
}
