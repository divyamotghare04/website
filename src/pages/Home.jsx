import React from "react";

import homeImage1 from "../assets/homeImage1.png";
import homeImage2 from "../assets/homeImage2.png";
import homeImage3 from "../assets/homeImage3.png";

import horizontalLogo from "../assets/horizontal_logo.png";
import rec from "../assets/rec.png";
import Navbar from "../UI/Navbar";
import ArrowButton from "../UI/ArrowButton";
import BlueBox from "../components/BlueBox";
import FooterTop from "../UI/FooterTop";

const Home = () => {
  return (
    <div className="">
      <img alt="" src={rec} className="top-img" />

      <Navbar logo={horizontalLogo} img={rec} />
      <div className="flex ">
        <div className="mt-[255px] ml-16">
          <h1 className=" text-7xl w-[788px] font-extrabold font-poppins text-blue_text">
            <div className="mb-3"> Simplify the process,</div>

            <div> Optimize the growth</div>
          </h1>
          <br />

          <h1 className="w-[650px] h-[37px] mt-2 text-3xl font-medium font-playfair_display text-gray_text">
            {" "}
            Ready to Transform Your Business Digitally?
          </h1>
          <p className="text-xl mt-8 text-gray_text font-avenir text-balance">
            Whether you’re a burgeoning startup or an established enterprise,
            <br />
            Dataweaver has the blueprint for your success! <br />
            As seasoned IT consultants and Data Analysts, we specialize in
            crafting <br />
            tailor-made software solutions that empower your business to scale{" "}
            <br /> seamlessly and streamline operations efficiently. <br />
            Seize the data and unlock its full potential with Dataweaver.
            <br />
            Experience the power of digital transformation today!
          </p>
          <div className="mt-16">
            <ArrowButton
              content="Let's connect"
              color="green"
              textColor="white"
            />
          </div>
        </div>
        <div className=" hero-img bg-blue_home">
          <img alt="" src={homeImage1} className="hero-img opacity-65  " />
        </div>
      </div>
      <div className="flex items-center mt-[165px] ml-16">
        <div className="w-[518px] h-[508px] flex flex-col justify-between">
          <div className="flex justify-between">
            <BlueBox text1="WHO" text2="ARE WE" className="  w-full h-full" />
            <img src={homeImage2} />
          </div>
          <img src={homeImage3} />
        </div>

        <div className=" ml-20">
          <h1 className=" text-3xl font-bold font-poppins text-gray_text">
            Born from Dreams, Powered
            <br /> by Innovation: Introducing
            <br /> Dataweaver!
          </h1>
          <p className="text-lg w-[571px] font-normal mt-8 font-avenir text-balance text-gray_text">
            Our story is one of relentless passion and unwavering commitment. We
            offer an extensive array of technology services and IT solutions
            meticulously designed to fortify and enhance our clients’ business
            operations
          </p>
          <div className="mt-16">
            <ArrowButton content="Know more" color="green" textColor="white" />
          </div>
        </div>
      </div>
      <FooterTop content="Join us in shaping the future of technology together! Experience the Dataweaver difference today." />
    </div>
  );
};

export default Home;
