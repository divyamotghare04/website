import { useEffect } from "react";
import FooterTop from "../../../../UI/FooterTop";
import Navbar from "../../../../UI/Navbar";
import blueLogo from "../../../../assets/horizontal_blue_logo.png";
import salesImage1 from "../../../../assets/salesImage1.svg";

import { reveal, salesAccordianArray } from "../../../../utils/helper";

function DesktopSales() {
  useEffect(() => {
    reveal();

    window.addEventListener("scroll", reveal);

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div>
      <Navbar logo={blueLogo} />

      <div className="flex flex-col mb-[10rem] reveal">
        <div className="mt-[10rem] mb-10">
          <h1 className="ml-16 font-extrabold xl:text-4xl lg:text-3xl font-inter text-black">
            Sales
          </h1>
        </div>
        <div>
          <img alt="sales" src={salesImage1} className="w-full h-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 mb-[10rem] reveal">
        {salesAccordianArray.map((item) => (
          <div
            key={item.key}
            className="flex flex-col items-center border border-green rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 mb-4 object-contain"
            />
            <p className="font-avenir text-gray_text text-center text-sm">
              {item.content}
            </p>
          </div>
        ))}
      </div>

      <FooterTop content="Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default DesktopSales;
