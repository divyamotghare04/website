import React, { useState } from "react";
import mobileHome1 from "../../assets/mobileHome1.jpg";
import mobileHomeBackground from "../../assets/mobileHomeBackground.jpg";

import ArrowButton from "../../UI/ArrowButton";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";

import MobileTestimonialSlider from "../../UI/MobileTestimonialSlider";
import MobileFooterTop from "../../UI/MobileFooterTop";
import MobileExpandingPanels from "../../UI/MobileExpandingPanels";

const MobileHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full bg-cover bg-center bg-no-repeat">
      <div
        style={{
          backgroundImage: `url(${mobileHomeBackground})`,
        }}
      >
        <div className="text-white p-5 relative">
          <GrMenu size={36} onClick={toggleMenu} className="cursor-pointer" />
          {menuOpen && (
            <div className="absolute  bg-white shadow-xl rounded-sm shadow-inherit z-50 w-36">
              <ul className="text-gray_text">
                <li className="p-2 hover:bg-gray_line cursor-pointer">
                  Products
                </li>
                <li className="p-2 hover:bg-gray_line cursor-pointer">
                  Services
                </li>
                <li className="p-2 hover:bg-gray_line cursor-pointer">Team</li>
                <li className="p-2 hover:bg-gray_line cursor-pointer">
                  About Us
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div className=" text-white px-6 bg-opacity-75 mb-5">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight">
                Simplify the process,
                <br />
                Optimize the growth
              </h1>
              <p className="text-lg font-playfair_display">
                Ready to Transform Your Business Digitally?
              </p>
            </div>
          </div>

          <div className="w-auto h-[30rem] p-5">
            <img
              src={mobileHome1}
              alt="Office environment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-10">
            <Link to="/contact">
              <ArrowButton
                content="Let's connect"
                color="white"
                textColor="green"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center mt-8">
        <h2 className="font-bold font-poppins text-3xl">WHAT WE OFFER</h2>
        <div className=" rounded-lg p-6 text-white relative">
          <MobileExpandingPanels />
        </div>
      </div>

      <div className="p-6 text-2xl mb-5">
        <h3 className="font-bold mb-2 font-poppins">
          Born from Dreams,
          <br />
          Powered by Innovation:
        </h3>
        <p className="font-bold bg-gradient-to-r from-primary to-blue_team text-transparent bg-clip-text font-poppins mb-4">
          Introducing Dataweaver!
        </p>
        <p className="text-gray_text text-montserrat text-sm mb-4">
          Our story is one of relentless passion and unwavering commitment. We
          offer an extensive array of technology services and business solutions
          that are designed to fortify and enhance our clients' business
          operations.
        </p>
        <ArrowButton content="Know More" color="green" textColor="white" />
      </div>

      <div className="p-6 flex flex-col items-center bg-gray-50 bg-gradient-to-b from-primary to-secondary ">
        <h2 className="font-bold text-white text-3xl mb-4 ">
          WHAT OUR CLIENT SAYS
        </h2>

        <div className="">
          <MobileTestimonialSlider />
        </div>
      </div>

      <MobileFooterTop
        content="Help us in shaping the future of technology together! Experience the
            Dataweaver difference today."
      />
    </div>
  );
};

export default MobileHome;
