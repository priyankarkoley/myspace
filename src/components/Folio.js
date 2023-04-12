import FamTech from "./FamTech";
import TargetTech from "./TargetTech";

export default function Folio(props) {
  let isLightMode = props.mode;
  return (
    <span className={!isLightMode ? "dark" : ""}>
      <div className="bg-[#BCEAD5] dark:bg-[#245953] dark:text-white text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl px-6 py-8 sm:py-10 sm:p-14 md:py-16 md:px-10 lg:px-16 xl:px-40 2xl:px-48 space-y-24 sm:space-y-12 md:space-y-12 lg:space-y-32">
        <div className="space-y-5 sm:space-y-9 md:space-y-20">
          <h1>Tech I'm Familiar With</h1>
          <FamTech />
        </div>
        <div className="space-y-5 sm:space-y-9 md:space-y-20">
          <h1>My next goal is to learn</h1>
          <TargetTech />
        </div>
      </div>
    </span>
  );
}
