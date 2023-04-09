import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <div className="absolute top-[3.3rem] w-full sm:hidden">
        <Link
          to="/myspace"
          className="block dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-t border-cyan-200 backdrop-blur py-[0.73rem] pl-14"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-cyan-200 backdrop-blur py-[0.73rem] pl-14"
        >
          About Me
        </Link>
        <Link
          to="/folio"
          className="block dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-cyan-200 backdrop-blur py-[0.73rem] pl-14"
        >
          Folio
        </Link>
        <a
          rel="noreferrer"
          href="https://flowcv.com/resume/8ls7tq49ju"
          target="_blank"
          to="/contact"
          className="block dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-cyan-200 backdrop-blur py-[0.73rem] pl-14"
        >
          Resume
        </a>
        <Link
          to="/contact"
          className="block dark:text-[#A5C9CA] bg-[#305fa9b4] dark:bg-[#395B64f3] text-lg border-b border-cyan-200 backdrop-blur py-[0.73rem] pl-14"
        >
          Contact Me
        </Link>
        
      </div>
    </>
  );
}
