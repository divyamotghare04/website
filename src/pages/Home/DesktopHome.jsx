import React, { useEffect } from "react";
import homeImage1 from "../../assets/homeImage1.png";
import homeImage2 from "../../assets/homeImage2.png";
import homeImage3 from "../../assets/homeImage3.png";
import horizontalLogo from "../../assets/horizontal_logo.png";
import horizontalBlueLogo from "../../assets/horizontal_blue_logo.png";

import rec from "../../assets/rec.png";
import Navbar from "../../UI/Navbar";
import ArrowButton from "../../UI/ArrowButton";
import BlueBox from "../../components/BlueBox";
import FooterTop from "../../UI/FooterTop";
import TestimonialSlider from "../../UI/TestimonialSlider";
import ExpandingPanels from "../../UI/ExpandingPanels";
import { Link } from "react-router-dom";
import { reveal } from "../../utils/helper";

const DesktopHome = () => {
  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center ">
        <img
          alt=""
          src={rec}
          className="top-img  xxl:w-[80rem] xxl:h-[20rem] xxl:-left-[350px] xxl:top-[30px]"
        />

        <Navbar logo={horizontalLogo} img={rec} color="black" />

        <div className="relative flex reveal w-full">
          <div className="mt-[18rem] ml-16 xxl:ml-[40rem] ">
            <h1 className="xl:text-7xl xl:w-[50rem] lg:w-[33rem] lg:text-5xl font-extrabold font-poppins text-blue_text">
              <div className="mb-3"> Simplify the process,</div>
              <div> Optimize the growth</div>
            </h1>
            <br />
            <h1 className="lg:w-[32rem] xl:w-[38rem] mt-2 xl:text-3xl lg:text-2xl font-medium font-playfair_display text-gray_text">
              Ready to Transform Your Business Digitally?
            </h1>
            <p className="xl:text-xl lg:text-base mt-8 text-gray_text font-avenir text-balance">
              Whether you’re a burgeoning startup or an established enterprise,
              <br />
              Data Weaver has the blueprint for your success! <br />
              As seasoned IT consultants and Data Analysts, we specialize in
              crafting <br />
              tailor-made software solutions that empower your business to scale{" "}
              <br /> seamlessly and streamline operations efficiently. <br />
              Seize the data and unlock its full potential with Data Weaver.
              <br />
              Experience the power of digital transformation today!
            </p>
            <div className="mt-16">
              <Link to="/contact">
                <ArrowButton
                  content="Let's connect"
                  color="green"
                  textColor="white"
                />
              </Link>
            </div>
          </div>
          <div className="relative w-[140vh]  xl:w-[120vh] xxl:w-[80vh] xl:h-[100vh] l:h-[100vh] xxl:h-[80vh]  top-0 right-0 ">
            <img
              alt=""
              src={homeImage1}
              className="absolute right-0 top-0  w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center mt-[12rem] ml-16 mb-[12rem] reveal">
          <div className="xl:w-[32.5rem] xl:h-[32rem] lg:w-[25rem] lg:h-[24.5rem] flex flex-col justify-between">
            <div className="flex justify-between">
              <BlueBox
                text1="WHO"
                text2="ARE WE"
                className="xl:w-full xl:h-full"
              />
              <div className="lg:w-[11.5rem] xl:w-[15rem]">
                <img src={homeImage2} className="reveal" />{" "}
              </div>
            </div>
            <img src={homeImage3} className="reveal" />
          </div>
          <div className="ml-20">
            <h1 className="xl:text-3xl lg:text-xl font-bold font-poppins text-gray_text">
              Born from Dreams, Powered <br /> by Innovation: Introducing <br />{" "}
              Data Weaver!
            </h1>
            <p className="xl:text-lg xl:w-[30rem] lg:w-[22rem] font-normal mt-8 font-avenir text-balance text-gray_text">
              Our story is one of relentless passion and unwavering commitment.
              We offer an extensive array of technology services and IT
              solutions meticulously designed to fortify and enhance our
              clients’ business operations.
            </p>
            <div className="mt-16">
              <Link to="/about">
                <ArrowButton
                  content="Know more"
                  color="green"
                  textColor="white"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative reveal">
          <div className="flex ml-16 mb-[12rem]">
            <BlueBox
              text1="WHAT"
              text2="WE OFFER"
              className="xl:w-full xl:h-[40rem]"
            />
            <ExpandingPanels />
          </div>
        </div>

        <div className="flex ml-16 mb-[12rem] reveal">
          <BlueBox
            text1="WHAT OUR"
            text2="CLIENTS SAY"
            className="w-full h-full"
          />
          <div>
            <TestimonialSlider />
          </div>
        </div>
      </div>
      <FooterTop content="Join us in shaping the future of technology together! Experience the Data Weaver difference today." />
    </div>
  );
};

export default DesktopHome;
