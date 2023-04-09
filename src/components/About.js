export default function About(props) {
  let isLightMode = props.mode;
  return (
    <span className={!isLightMode && "dark"}>
      <div className="bg-yellow-300 dark:bg-black">
        About
      </div>
    </span>
  );
}