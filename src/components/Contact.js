import React, { useState } from "react";
import Other from "./Other"
import p1 from "../social_handels/gh.png";
import p2 from "../social_handels/li.webp";
import p3 from "../social_handels/tw.png";
import p4 from "../social_handels/ig.png";
import p5 from "../social_handels/fb.png";

export default function Contact(props) {
  let isLightMode = props.mode;
  const [isExpanded, setisExpanded] = useState(false);

  let handleClick = () => {
    setisExpanded(!isExpanded);
  };
  return (
    <span className={!isLightMode ? "dark" : ""}>
      <div className="bg-[#BCEAD5] dark:bg-[#245953] dark:text-white text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl px-6 py-20 sm:p-14 md:py-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 space-y-8 md:space-y-12 lg:space-y-20">
        <div className="">Let's get in touch !!</div>
        <div className="flex space-x-6 sm:space-x-16 justify-center">
          <a href="https://github.com/priyankarkoley">
            <img
              src={p1}
              alt="gh"
              className="bg-white h-9 w-9 drop-shadow-2xl rounded-full sm:h-12 sm:w-12"
            />
          </a>
          <a href="https://www.linkedin.com/in/priyankarkoley/">
            <img
              src={p2}
              alt="gh"
              className="h-9 w-9 drop-shadow-2xl rounded-md sm:h-12 sm:w-12"
            />
          </a>
          <a href="https://twitter.com/PriyankarKoley">
            <img
              src={p3}
              alt="gh"
              className="h-9 w-9 drop-shadow-2xl rounded-md sm:h-12 sm:w-12"
            />
          </a>
          <a href="https://www.instagram.com/priyankar_koley/">
            <img
              src={p4}
              alt="gh"
              className="h-9 w-9 drop-shadow-2xl rounded-xl sm:h-12 sm:w-12"
            />
          </a>
          <a href="https://www.facebook.com/priyankar.koley/">
            <img
              src={p5}
              alt="gh"
              className="h-9 w-9 drop-shadow-2xl rounded-md sm:h-12 sm:w-12"
            />
          </a>
        </div>

        <div className="">
          <div className="mt-16 mx-auto border border-gray-400 bg-white py-7 lg:w-[760px] xl:w-[900px]">
              <form action="https://formsubmit.co/f71a5fa4717401170d6b2d8f69f7751b" method="POST">
            <div className="space-y-6">
              <label className="text-4xl lg:text-5xl">Contact Me</label>
                <div className="space-y-6 sm:flex sm:w-5/6 mx-auto sm:space-x-6">
                  <input type="text" id="fname" name="fname" placeholder="Enter first name" className="border-b border-black px-1 pt-6 text-lg w-5/6"/>
                  <input type="text" id="lname" name="lname" placeholder="Enter last name" className="border-b border-black p-1 text-lg w-5/6"/>
                </div>
                <input type="email" id="email" name="email" placeholder="Enter your email here" required className="border-b border-black px-1 text-lg w-5/6"/>
                <input type="text" id="Sub" name="_subject" placeholder="Subject here" className="border-b border-black px-1 text-lg w-5/6"/>
                <textarea rows="1" type="text" id="msg" name="msg" placeholder="Say hello!" className="border-b  border-black px-1 text-lg w-5/6"/>
                <input type="hidden" name="_next" value="https://priyankarkoley.github.io/contact"></input>
                <input type="hidden" name="_autoresponse" value="Thanks for contacting us! We will look into your msg soon."></input>
                <input type="hidden" name="_template" value="table"></input>
            </div>
            <button type="submit" className="bg-purple-600 hover:bg-purple-500 px-6 pt-1 pb-2 rounded-3xl border border-purple-950 text-lg text-white">Send</button>
              </form>
          </div>
            <button onClick={handleClick} className="m-11 bg-purple-600 hover:bg-purple-500 px-6 pt-1 pb-2 rounded-3xl border border-purple-950 text-lg text-white">Other Ways To Contact</button>
            {isExpanded && <Other/>}
        </div>
      </div>
    </span>
  );
}
