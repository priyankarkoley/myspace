export default function Contact(props) {
  let isLightMode = props.mode;
  return (
    <span className={!isLightMode && "dark"}>
      <div className="bg-yellow-300 dark:bg-black">
        Contact
      </div>
    </span>
  );
}