import { useEffect } from "react";
import FooterTop from "../../../../UI/FooterTop";

import salesImage1 from "../../../../assets/salesImage1.svg";
import { reveal, salesAccordianArray } from "../../../../utils/helper";
import MobileNavbar from "../../../../UI/MobileNavbar";
import MobileFooterTop from "../../../../UI/MobileFooterTop";

import mobileHomeBackground from "../../../../assets/mobileHomeBackground.jpg";

function MobileSales() {
  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${mobileHomeBackground})`,
        }}
      >
        <MobileNavbar />

        <div className="flex flex-col md:flex-row items-center justify-between mt-2 mb-10 p-4 md:px-16 reveal">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="font-extrabold text-3xl lg:text-3xl text-white">
              Sales
            </h1>
          </div>

          <div className="md:w-1/2 flex justify-center ">
            <img
              alt="sales"
              src={salesImage1}
              className="w-full max-w-md md:max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 mb-20 reveal">
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

      <MobileFooterTop content="Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default MobileSales;
