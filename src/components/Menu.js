import React from 'react'
import PropTypes from 'prop-types'


export default function Menu() {
  return (
    <>
      <div  className='absolute top-[3.3rem] w-full sm:hidden'>
        <div className="dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-t border-cyan-200 backdrop-blur py-[0.73rem] pl-14">
          Home
        </div>
        <div className="dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-cyan-200 backdrop-blur py-[0.73rem] pl-14">
          About Me
        </div>
        <div className="dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-cyan-200 backdrop-blur py-[0.73rem] pl-14">
          Folio
        </div>
        <div className="dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-cyan-200 backdrop-blur py-[0.73rem] pl-14">
          Resume
        </div>
        <div className="dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-cyan-200 backdrop-blur py-[0.73rem] pl-14">
          Contact Me
        </div>
      </div>
    </>
  )
}
