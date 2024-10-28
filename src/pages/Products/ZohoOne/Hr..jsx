import { useEffect } from "react";
import FooterTop from "../../../UI/FooterTop";
import Navbar from "../../../UI/Navbar";
import blueLogo from "../../../assets/horizontal_blue_logo.png";
import hrImage1 from "../../../assets/hrImage1.svg";
import hrImage2 from "../../../assets/hrImage2.svg";
import AccordionCustomAnimation from "../../../components/AccordianCustomAnimation";

import { hrAccordianArray, reveal } from "../../../utils/helper";

function Hr() {
  useEffect(() => {
    // Call the reveal function on mount
    reveal();

    // Attach scroll event listener
    window.addEventListener("scroll", reveal);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", reveal);
  }, []);
  return (
    <div>
      <Navbar logo={blueLogo} />

      <div className="flex flex-col mb-[10rem] reveal">
        <div className="mt-[10rem] mb-10">
          <h1 className="ml-16 font-extrabold xl:text-4xl lg:text-3xl font-inter text-black">
            HR
          </h1>
        </div>
        <div className=" ">
          <img alt="hr" src={hrImage1} className="w-full h-auto" />
        </div>
      </div>

      <div className="flex mx-20 mb-[12rem] reveal">
        <div className="ml-10">
          <img src={hrImage2} />
        </div>
        <div className="ml-10">
          <AccordionCustomAnimation items={hrAccordianArray} />
        </div>
      </div>
      <FooterTop content=" Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default Hr;
