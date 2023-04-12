import React from "react";
import wp from "../social_handels/wp.png";

export default function Other() {
  return (
    <div className="text-2xl lg:text-3xl 2xl:text-4xl ">
      <div className="w-fit m-auto text-left space-y-5">
        <div>
          <a href="tel:+919475755144">
            <span className="material-symbols-outlined">call</span>&emsp;Call Me
          </a>
        </div>
        <div>
          <a href="mailto:priyankarkoley@gmail.com">
            <span className="material-symbols-outlined">mail</span>&emsp;Send an
            Email
          </a>
        </div>
        <div>
          <a href="https://goo.gl/maps/Ls7BEAPnMJ45Kej87">
            <span className="material-symbols-outlined">location_on</span>
            &emsp;Find Me
          </a>
        </div>
        <div>
          <a href="https://wa.me/+919475755144?text=How%20are%20you%20bro!?">
            <img className="inline-block w-6" src={wp} alt="whatsapp" />
            &emsp;Message Me
          </a>
        </div>
      </div>
    </div>
  );
}
