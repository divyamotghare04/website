import React from "react";
import horizontalLogo from "../../assets/horizontal_logo.png";
import ArrowButton from "../ArrowButton";

const DesktopFooter = ({ content }) => {
  return (
    <footer>
      <div className="bg-primary w-full xxl:h-[30rem] h-[310px] text-white ">
        <div className="py-10 px-20 flex justify-center">
          <div className="flex flex-col gap-4 mt-12  md:flex-row justify-between items-start ">
            <div className="xxl:mr-[35rem] lg:mr-[10rem]">
              <span className="text-sm text-black sm:text-center ">
                <a href="/" className=" ">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src={horizontalLogo}
                    className="h-12 xxl:h-[5rem] w-auto"
                  />
                </a>
              </span>
            </div>

            <div className="flex xl:space-x-12 lg:space-x-5">
              <div className="">
                <h3 className=" mb-2 font-poppins xxl:text-3xl text-xl">
                  Services
                </h3>
                <ul className="space-y-2 xxl:text-xl">
                  <li>
                    <a href="/services/data-management">Data Management</a>
                  </li>
                  <li>
                    <a href="/services/erp-consultation">ERP</a>
                  </li>
                  <li>
                    <a href="/services/zoho-customization">ZOHO </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className=" mb-2 font-poppins xxl:text-3xl text-xl">
                  Products
                </h3>
                <ul className="space-y-2 xxl:text-xl">
                  <li>
                    <a href="/products/zoho-one">ZOHO One</a>
                  </li>
                  <li>
                    <a href="/products/erp-next">ERP Next</a>
                  </li>
                </ul>
              </div>
              <a href="/team">
                <h3 className=" mb-2 font-poppins xxl:text-3xl text-xl">
                  Team
                </h3>
              </a>
              <a href="/about">
                <h3 className=" mb-2 font-poppins xxl:text-3xl text-xl">
                  About
                </h3>
              </a>
              <a href="/contact">
                <h3 className=" mb-2 font-poppins xxl:text-3xl text-xl">
                  Contact
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
