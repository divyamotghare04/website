import FooterTop from "../../../UI/FooterTop";
import Navbar from "../../../UI/Navbar";
import blueLogo from "../../../assets/horizontal_blue_logo.png";
import salesImage1 from "../../../assets/salesImage1.svg";
import salesImage2 from "../../../assets/salesImage2.svg";
import AccordionCustomAnimation from "../../../components/AccordianCustomAnimation";

import { salesAccordianArray } from "../../../utils/helper";

function Sales() {
  return (
    <div>
      <Navbar logo={blueLogo} />

      <div className="flex flex-col mb-[150px]">
        <div className="mt-[157px] mb-10">
          <h1 className="ml-16 font-extrabold text-4xl font-inter text-black">
            Sales
          </h1>
        </div>
        <div className=" ">
          <img alt="sales" src={salesImage1} className="w-full h-auto" />
        </div>
      </div>

      <div className="flex mx-20 mb-[200px]">
        <div className="ml-10">
          <img src={salesImage2} />
        </div>
        <div className="ml-10">
          <AccordionCustomAnimation items={salesAccordianArray} />
        </div>
      </div>
      <FooterTop content=" Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default Sales;
