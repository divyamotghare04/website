// ImageContainer.js
import React, { useState } from "react";
import teamImage2 from "../assets/teamImage2.png";

function ImageContainer({ img, name, role }) {
  const [hovered, setHovered] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const handleMouseEnter = () => {
    setHovered(true);
    let index = 1; // Start from the second image (index 1)
    const interval = setInterval(() => {
      setActiveImage(index);
      index = (index + 1) % img.length; // Loop through the images
    }, 300); // Change image every 1 second

    // Stop interval when unhovered
    setTimeout(() => clearInterval(interval), 900); // Stop after 4 cycles
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setActiveImage(0); // Reset to first image
  };

  return (
    <div
      className="mb-[10rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <div className="xl:w-[20rem] xl:h-[15rem] lg:h-[20rem]">
          <img src={teamImage2} width={300} />
        </div>
        <div className="absolute top-0 left-0 xl:w-[20rem] xl:h-[20rem] lg:h-[20rem] lg:w-[20rem] -translate-x-12 -translate-y-28">
          <img
            className="content-stretch"
            src={hovered ? img[activeImage] : img[0]} // Show the active image
            width={300}
            alt={name}
          />
        </div>
      </div>
      <div>
        <h1 className="font-poppins font-semibold text-2xl text-gray_text">
          {name}
        </h1>
        <p className="font-avenir text-xl text-gray_text">{role}</p>
      </div>
    </div>
  );
}

export default ImageContainer;
