import Navbar from "../../UI/Navbar";
import logoBlue from "../../assets/horizontal_blue_logo.png";
import dataImage1 from "../../assets/dataImage1.png";
import FooterTop from "../../UI/FooterTop";

function DataManagement() {
  return (
    <div>
      <Navbar logo={logoBlue} />
      <div className="flex justify-between mt-[157px] px-16 mb-12 ">
        <h1 className="font-inter font-extrabold text-4xl ">
          {" "}
          Data Management
        </h1>
        <p className="font-avenir text-xl text-gray_text">
          In today's data-driven world, success hinges on the ability to harness
          the full <br /> potential of your data. At Data Weaver, we understand
          that managing data isn't <br /> just about storage—it's about
          unleashing its power to drive strategic decision- <br /> making and
          fuel business growth.
        </p>
      </div>

      <div>
        <img src={dataImage1} alt="Base image" className="w-full h-auto" />
      </div>
      <div>
       
      </div>
      <FooterTop content=" Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default DataManagement;
