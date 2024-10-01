import React from "react";
import horizontalLogo from "../assets/horizontal_logo.png";
import ArrowButton from "./ArrowButton";

const Footer = ({ content }) => {
  return (
    <footer>
      
      <div className="bg-primary w-full h-[310px] text-white ">
        <div className="py-10 px-20 ">
          <div className="flex flex-col mt-12 md:flex-row justify-between items-start ">
            <div className="">
              <span className="text-sm text-black sm:text-center ">
                <a href="/" className=" ">
                  <span className="sr-only">Your Company</span>
                  <img alt="" src={horizontalLogo} className="h-12 w-auto" />
                </a>
              </span>
            </div>

            <div className="flex space-x-16">
              <div className="md:w-1/2  md:mb-0">
                <h3 className=" mb-2 font-poppins text-xl">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/datamanagement">Data Management</a>
                  </li>
                  <li>
                    <a href="/erp">ERP</a>
                  </li>
                  <li>
                    <a href="/zoho">ZOHO </a>
                  </li>
                </ul>
              </div>
              <a href="/products">
                <h3 className=" mb-2 font-poppins text-xl">Products</h3>
              </a>
              <a href="/team">
                <h3 className=" mb-2 font-poppins text-xl">Team</h3>
              </a>
              <a href="/about">
                <h3 className=" mb-2 font-poppins text-xl">About</h3>
              </a>
              <a href="/contact">
                <h3 className=" mb-2 font-poppins text-xl">Contact</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
