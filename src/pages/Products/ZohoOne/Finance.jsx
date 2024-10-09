import FooterTop from "../../../UI/FooterTop";
import Navbar from "../../../UI/Navbar";
import blueLogo from "../../../assets/horizontal_blue_logo.png";
import financeImage1 from "../../../assets/financeImage1.svg";
import financeImage2 from "../../../assets/financeImage2.svg";
import AccordionCustomAnimation from "../../../components/AccordianCustomAnimation";

import { financeAccordianArray } from "../../../utils/helper";

function Finance() {
  return (
    <div>
      <Navbar logo={blueLogo} />

      <div className="flex flex-col mb-[150px]">
        <div className="mt-[157px] mb-10">
          <h1 className="ml-16 font-extrabold text-4xl font-inter text-black">
            Finance
          </h1>
        </div>
        <div className=" ">
          <img alt="finance" src={financeImage1} className="w-full h-auto" />
        </div>
      </div>

      <div className="flex mx-20 mb-[200px]">
        <div className="ml-10">
          <img src={financeImage2} />
        </div>
        <div className="ml-10">
          <AccordionCustomAnimation items={financeAccordianArray} />
        </div>
      </div>
      <FooterTop content=" Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default Finance;
