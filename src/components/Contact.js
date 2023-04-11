import p1 from "../social_handels/gh.png";
import p2 from "../social_handels/li.webp";
import p3 from "../social_handels/tw.png";
import p4 from "../social_handels/ig.png";
import p5 from "../social_handels/fb.png";

export default function Contact(props) {
  let isLightMode = props.mode;
  return (
    <span className={!isLightMode ? "dark" : ""}>
      <div className="bg-[#BCEAD5] dark:bg-[#245953] dark:text-white text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl px-6 py-20 sm:p-14 md:py-16 md:px-10 lg:px-32 xl:px-40 2xl:px-48 space-y-12 sm:space-y-32">
        <div className="">Let's get in touch !!</div>
        <div className="flex space-x-6 sm:space-x-16 justify-center">
          <a href="https://github.com/priyankarkoley">
            <img
              src={p1}
              alt="gh"
              className="h-9 w-9 drop-shadow-2xl rounded-md sm:h-12 sm:w-12"
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
              className="h-9 w-9 drop-shadow-2xl rounded-md sm:h-12 sm:w-12"
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
      </div>
    </span>
  );
}
