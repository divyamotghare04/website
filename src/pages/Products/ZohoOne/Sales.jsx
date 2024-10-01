import Navbar from "../../../UI/Navbar";
import blueLogo from "../../../assets/horizontal_blue_logo.png";
import salesImage1 from "../../../assets/salesImage1.svg";
import salesImage2 from "../../../assets/salesImage2.svg";
import AccordianList from "../../../components/Accordian/AccordianList";
import { salesAccordianArray } from "../../../utils/helper";

function Sales() {
  return (
    <div>
      <Navbar logo={blueLogo} />

      <div className="flex flex-col">
        <div className="mt-[157px] mb-10">
          <h1 className="ml-16 font-extrabold text-4xl font-inter text-black">
            Sales
          </h1>
        </div>
        <div className=" ">
          <img alt="sales" src={salesImage1} className="w-full h-auto" />
        </div>
      </div>

      <div className="flex mx-16">
        <div>
          <img src={salesImage2} />
        </div>
        <AccordianList items={salesAccordianArray} />
      </div>
    </div>
  );
}

export default Sales;
