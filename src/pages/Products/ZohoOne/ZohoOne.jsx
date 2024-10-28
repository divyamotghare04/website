import { FaChevronRight } from "react-icons/fa";
import Navbar from "../../../UI/Navbar";
import horizontalBlueLogo from "../../../assets/horizontal_blue_logo.png";

import FooterTop from "../../../UI/FooterTop";

import zohoImage1 from "../../../assets/zohoImage1.png";
import zohoImage2 from "../../../assets/zohoImage2.svg";
import zohoImage3 from "../../../assets/zohoImage3.svg";
import zohoImage4 from "../../../assets/zohoImage4.svg";
import zohoImage5 from "../../../assets/zohoImage5.svg";
import zohoImage6 from "../../../assets/zohoImage6.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { reveal } from "../../../utils/helper";

const navigation = [
  { name: "Sales", href: "/products/zoho-one/sales" },
  { name: "Marketing", href: "/products/zoho-one/marketing" },
  { name: "Finance", href: "/products/zoho-one/finance" },
  { name: "HR", href: "/products/zoho-one/hr" },
  { name: "BI & Analytics", href: "/products/zoho-one/bi-analytics" },
];

function ZohoOne() {
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
      <Navbar logo={horizontalBlueLogo} />
      <h1 className="mt-[10rem] mb-20 font-inter font-extrabold text-4xl ml-16 reveal">
        Our Products
      </h1>

      <div className="mb-20 reveal">
        <img src={zohoImage1} alt="zoho one image" className="w-full h-auto" />
      </div>

      <div className="flex justify-between items-center mx-9 mb-20 reveal">
        <div>
          <h1 className="font-poppins mb-3 font-bold xl:text-3xl lg:text-2xl text-gray_text ml-10">
            Zoho One
          </h1>{" "}
          <p className="xl:w-[36rem] lg:w-[28rem] ml-10 xl:text-xl lg:text-base font-avenir text-gray_text">
            Welcome to Data Weaver, where we elevate your business to new
            heights with our expert IT and data analytics services. Partnering
            with Zoho One, a cutting-edge suite of innovative applications, we
            offer a tailored approach to maximize its potential for your unique
            business requirements.
          </p>
        </div>
        <div className="flex flex-col mb-2 xl:w-[32rem] lg:w-[20rem] ">
          {navigation.map((item) => (
            <Link
              to={item.href}
              className="xl:text-xl  border-b border-solid border-gray_line font-semibold font-poppins flex  justify-between items-center p-2 text-gray_text"
            >
              <button className="" key={item.name}>
                {item.name}
              </button>

              <div className="text-green">
                <FaChevronRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center reveal">
        <h1 className="font-poppins xl:text-3xl lg:text-2xl font-bold mb-10">
          At Data Weaver, we excel in....
        </h1>
      </div>
      <div className="grid grid-cols-2 xl:mx-16 lg:mr-16 lg:ml-5 xl:gap-y-10 lg:gap-y-10  xl:px-20 lg:px-3 xl:mb-[12.5rem] reveal">
        <div className="flex py-10 pl-5 border border-solid ml-10 items-start justify-center border-green">
          <img src={zohoImage2} />
          <div className="w-[25rem] ml-10">
            <h1 className="font-poppins mb-4 font-semibold xl:text-2xl lg:text-xl">
              Effortless Implementation
            </h1>
            <p className="font-avenir text-lg text-gray_text">
              Our expert team ensures a smooth, hassle-free transition to Zoho
              One, enabling your business to quickly harness its full potential
            </p>
          </div>
        </div>
        <div className="flex py-10 pl-5 border border-solid  ml-10 items-start justify-center border-green">
          <img src={zohoImage4} />
          <div className="w-[25rem] ml-10">
            <h1 className="font-poppins mb-4 font-semibold xl:text-2xl lg:text-xl">
              Tailored Customization
            </h1>
            <p className="font-avenir xl:text-lg  text-gray_text">
              We work closely with you to personalize Zoho One applications,
              perfectly aligning them with your unique business processes and
              objectives
            </p>
          </div>
        </div>
        <div className="flex py-10  pl-5 border border-solid  ml-10 items-start justify-center border-green">
          <img src={zohoImage5} />
          <div className="w-[25rem] ml-10">
            <h1 className="font-poppins mb-4 font-semibold xl:text-2xl lg:text-xl">
              Seamless Integration
            </h1>
            <p className="font-avenir xl:text-lg text-gray_text">
              We flawlessly integrate Zoho One applications with your existing
              systems, creating a unified and efficient workflow.
            </p>
          </div>
        </div>
        <div className="flex py-10  pl-5 border border-solid  ml-10 items-start justify-center border-green">
          <img src={zohoImage3} />
          <div className="w-[25rem] ml-10">
            <h1 className="font-poppins mb-4 font-semibold xl:text-2xl lg:text-xl">
              Ongoing Support
            </h1>
            <p className="font-avenir xl:text-lg text-gray_text">
              Our commitment to your success continues beyond implementation. We
              provide continuous support to ensure you consistently maximize the
              benefits of Zoho One.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-between items-center mx-16 h-[30rem] mb-[13rem] reveal">
        <div className=" mr-16 ">
          <img src={zohoImage6} />
        </div>
        <div className="w-[35rem] mr-10 text-gray_text">
          <h1 className="font-poppins font-bold xl:text-3xl lg:text-xl mb-5">
            Experience the Data Weaver Difference
          </h1>
          <p className="xl:text-xl font-avenir text-gray_text mb-3">
            Discover how expert IT and data analytics, paired with unparalleled
            customer support, can elevate your business. Join forces with Data
            Weaver and Zoho One today and unlock your true potential.
          </p>{" "}
          <p className="xl:text-xl font-avenir text-gray_text">
            {" "}
            At Data Weaver, we don't just offer services; we become your
            dedicated partner in business growth. By harnessing the full
            capabilities of Zoho One, we blend innovation with efficiency to
            propel your business forward.
          </p>
        </div>
      </div>
      <FooterTop content=" Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!s" />
    </div>
  );
}

export default ZohoOne;
