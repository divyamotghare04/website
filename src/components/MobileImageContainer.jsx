import React from "react";
import teamImage2 from "../assets/teamImage2.png";

function MobileImageContainer({ img, name, role }) {
  return (
    <div className="mb-[10rem] flex flex-col items-center">
      <div className="relative">
        <div className="w-48 h-36 sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-80 lg:h-56">
          <img className="w-full h-full" src={teamImage2} alt="Background" />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-28 -translate-y-24 w-44 h-52 sm:w-40 ">
          <img className="w-full h-full  shadow-xl" src={img} alt={name} />
        </div>
      </div>

      <div className="text-center mt-8">
        <h1 className="font-poppins font-semibold text-xl sm:text-2xl text-gray-800">
          {name}
        </h1>
        <p className="font-avenir text-lg sm:text-xl text-gray-600">{role}</p>
      </div>
    </div>
  );
}

export default MobileImageContainer;
