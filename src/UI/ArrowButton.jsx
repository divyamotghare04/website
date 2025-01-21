import React from "react";
import { GoArrowRight } from "react-icons/go";

const ArrowButton = ({ content, color, textColor }) => {
  return (
    <button
      className="flex items-center justify-between border-2 w-64 h-12 
                 lg:w-60 lg:h-12 
                 xl:w-76 xl:h-14 
                 xxl:w-96 xxl:h-20"
      style={{
        borderColor: color,
      }}
    >
      <div
        className="flex-1 font-avenir font-extrabold text-lg lg:text-xl xxl:text-2xl px-4"
        style={{
          color: color,
        }}
      >
        {content}
      </div>
      <div
        className="w-12 lg:w-14 xxl:w-16 h-full flex items-center justify-center"
        style={{
          backgroundColor: color,
          color: textColor,
        }}
      >
        <GoArrowRight className="w-5 h-5 lg:w-6 lg:h-6 xxl:w-8 xxl:h-8" />
      </div>
    </button>
  );
};

export default ArrowButton;
