import React from "react";
import coder_guy from "../images/coder.webp";

export default function Home(props) {
 let isLightMode = props.isLightMode;
  return (
    <span classname={!isLightMode&&'dark'}>
      {/* image */}
      <div className="bg-[#46ABFF] sm:fle sm:absolute sm:w-full -z-10">
        <img
          className="sm:w-5/6 mr-auto ml-auto"
          src={coder_guy}
          alt="coder_guy"
        />
        <div className="sm:text-white sm: w-full hidden sm:block sm:absolute sm:bottom-2 sm:text-2xl text-center font-semibold md:hidden">
          And, I love&nbsp;
          <span className="font-bold underline">COMPUTERS!</span>
          🖥️
        </div>
      </div>

      <div className="mt-5 text-2xl space-y-6 sm:space-y-9 xl:space-y-5 font-poppins">
        {/* glad to see you here */}
        <span className="block text-center font-semibold sm:-mt-5 md:text-left md:mt-5 md:pl-16 md:pt-5 lg:pt-20 xl:mt-11 xl:pl-40 xl:pt-24 md:text-2xl 2xl:pl-52 2xl:text-3xl">
          Hey, Glad to see
          <span className="italic text-[#11c4ff] sm:text-white">&nbsp;you</span> here!
        </span>

        {/* I'm PK */}
        <span className="block text-center font-bold sm:text-left sm:pl-5 md:pl-8 lg:pl-11 sm:text-3xl lg:text-3xl 2xl:text-4xl 2xl:pl-32">
          <span className="text-[#11c4ff] sm:text-white not-italic text-7xl xl:text-8xl 2xl:text-10xl">
            I'm <br className="hidden sm:block lg:hidden" />
          </span>
          Priyankar Koley
        </span>

        {/* And, I 💖 Comp */}
        <span className="block text-center font-semibold md:pr-6 lg:pt-16 lg:pr-9 xl:pt-36 xl:pr-9 xl:text-3xl 2xl:text-4xl">
          <div className="sm:hidden md:block md:float-right md:w-fit">
            <span className="md:block w-fit">And,</span>
            <span className="md:block lg:inline w-fit">I love </span>
            <span className="text-[#11c4ff] sm:text-white font-bold underline">
              COMPUTERS!
            </span>
            🖥️
          </div>
        </span>
      </div>
    </span>
  );
}
