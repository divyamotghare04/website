import React, { useState, useEffect } from "react";
import { reveal } from "../../../utils/helper";
import Navbar from "../../../UI/Navbar";
import logoBlue from "../../../assets/horizontal_blue_logo.png";
import dataImage1 from "../../../assets/dataImage1.png";
import dataImage2 from "../../../assets/dataImage2.png";
import dataImage3 from "../../../assets/dataImage3.png";
import dataImage4 from "../../../assets/dataImage4.png";
import dataImage5 from "../../../assets/dataImage5.png";
import dataImage6 from "../../../assets/dataImage6.png";
import dataImage7 from "../../../assets/dataImage7.png";
import dataImage8 from "../../../assets/dataImage8.png";
import dataImage9 from "../../../assets/dataImage9.png";
import FooterTop from "../../../UI/FooterTop";

const FeatureCard = ({ imageUrl, title, description }) => (
  <div className="flex p-2.5 border border-solid items-start justify-center border-green reveal">
    <div className="w-28">
      <img src={imageUrl} alt={title} />
    </div>
    <div className="w-[20.625rem] xxl:w-[25rem] ml-8">
      <h2 className="font-poppins mb-4 xxl:text-2xl font-semibold xl:text-2xl lg:text-xl">
        {title}
      </h2>
      <p className="font-avenir xxl:text-xl xl:text-lg lg:text-base text-gray_text">
        {description}
      </p>
    </div>
  </div>
);

function DesktopDataManagement() {
  const [activeTab, setActiveTab] = useState("Strategic Insights");

  const features = [
    {
      imageUrl: dataImage6,
      title: "Effortless Implementation",
      description:
        "Our expert team ensures a smooth, hassle-free transition to Zoho One, enabling your business to quickly harness its full potential",
    },
    {
      imageUrl: dataImage5,
      title: "Tailored Customization",
      description:
        "We work closely with you to personalize Zoho One applications, perfectly aligning them with your unique business processes and objectives",
    },
    {
      imageUrl: dataImage4,
      title: "Seamless Integration",
      description:
        "We flawlessly integrate Zoho One applications with your existing systems, creating a unified and efficient workflow.",
    },
    {
      imageUrl: dataImage3,
      title: "Ongoing Support",
      description:
        "Our commitment to your success continues beyond implementation. We provide continuous support to ensure you consistently maximize the benefits of Zoho One.",
    },
  ];

  const tabs = [
    "Strategic Insights",
    "Data Quality Assurance",
    "Data Integration",
    "Predictive Modelling",
  ];

  const tabContents = {
    "Strategic Insights": {
      image: dataImage2,
      title: "Gain a competitive edge with actionable insights",
      description:
        "Our advanced analytics tools uncover hidden patterns and trends, empowering you to make informed decisions that propel your business forward.",
    },
    "Data Quality Assurance": {
      image: dataImage8,
      title: "Ensure that your data is clean, accurate, and reliable.",
      description:
        "Our rigorous quality assurance processes eliminate errors, duplicates, and inconsistencies, providing a solid foundation for strategic planning and execution.",
    },
    "Data Integration": {
      image: dataImage9,
      title: "Break down silos and unify your data sources.",
      description:
        "Our seamless integration solutions consolidate disparate data sets, enabling you to uncover valuable connections and correlations.",
    },
    "Predictive Modelling": {
      image: dataImage7,
      title: "Anticipate future trends and outcomes with confidence.",
      description:
        "Our predictive modelling algorithms analyse historical data to forecast potential scenarios, guiding strategic initiatives and mitigating risks.",
    },
  };

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
      <Navbar logo={logoBlue} />
      <div className="flex justify-between mt-[9.8125rem]  px-16 mb-12 xxl:ml-[20rem] xxl:mt-[15rem] xxl:mr-[11rem]">
        <h1 className="font-inter font-extrabold xxl:mr-[20rem] xxl:text-6xl xl:text-4xl lg:text-2xl reveal">
          Data Management
        </h1>
        <p className="font-avenir xl:text-xl xxl:text-2xl lg:text-base text-gray_text reveal">
          In today's data-driven world, success hinges on the ability to harness
          the full <br /> potential of your data. At Data Weaver, we understand
          that managing data isn't <br /> just about storage—it's about
          unleashing its power to drive strategic decision- <br /> making and
          fuel business growth.
        </p>
      </div>

      <div className="mb-[4.375rem] xxl:mb-[8rem]">
        <img
          src={dataImage1}
          alt="Base image"
          className="w-full h-auto reveal"
        />
      </div>
      <div className="mb-[9.375rem] xxl:mb-[12rem] reveal flex flex-col items-center">
        <div className="flex gap-12 justify-center mb-[7.5rem] xxl:mb-[9rem]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-poppins text-base xxl:text-2xl px-4 py-2 rounded-md transition-colors ${
                activeTab === tab
                  ? "bg-green text-black font-bold"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab}
            className={`flex xl:mx-[10rem] lg:mx-16 items-center justify-between  ${
              activeTab === tab ? "block" : "hidden"
            }`}
          >
            <div className="mr-20">
              <img src={tabContents[tab].image} alt={tab} />
            </div>
            <div className="lg:w-[32rem]">
              <h1 className="font-poppins xxl:text-4xl font-bold xl:text-3xl lg:text-2xl mb-4">
                {tabContents[tab].title}
              </h1>
              <p className="font-avenir text-gray_text xxl:text-2xl">
                {tabContents[tab].description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 gap-10 mx-16 mb-[9.375rem]">
          <div className="flex p-[0.625rem] border border-solid items-start justify-center border-green reveal">
            <div className="w-[7rem]">
              <img src={dataImage6} />
            </div>
            <div className="w-[20.625rem] ml-8">
              <h1 className="font-poppins mb-4 font-semibold xl:text-2xl lg:text-xl">
                Effortless Implementation
              </h1>
              <p className="font-avenir xl:text-lg lg:text-base text-gray_text">
                Our expert team ensures a smooth, hassle-free transition to Zoho
                One, enabling your business to quickly harness its full
                potential
              </p>
            </div>
          </div>
          <div className="flex p-[0.625rem] border border-solid items-start justify-center border-green reveal">
            <div className="w-[7rem]">
              <img src={dataImage5} />
            </div>
            <div className="w-[20.625rem] ml-8">
              <h1 className="font-poppins mb-4 font-semibold xl:text-2xl lg:text-xl">
                Tailored Customization
              </h1>
              <p className="font-avenir lg:text-base xl:text-lg text-gray_text">
                We work closely with you to personalize Zoho One applications,
                perfectly aligning them with your unique business processes and
                objectives
              </p>
            </div>
          </div>
          <div className="flex p-[0.625rem] border border-solid items-start justify-center border-green reveal">
            <div className="w-[7rem]">
              <img src={dataImage4} />
            </div>
            <div className="w-[20.625rem] ml-10">
              <h1 className="font-poppins mb-4 font-semibold xl:text-2xl lg:text-xl">
                Seamless Integration
              </h1>
              <p className="font-avenir lg:text-base xl:text-lg text-gray_text">
                We flawlessly integrate Zoho One applications with your existing
                systems, creating a unified and efficient workflow.
              </p>
            </div>
          </div>
          <div className="flex p-[0.625rem] border border-solid items-start justify-center border-green reveal">
            <div className="w-[7rem]">
              <img src={dataImage3} />
            </div>
            <div className="w-[20.625rem] ml-10">
              <h1 className="font-poppins mb-4 font-semibold xl:text-2xl lg:text-xl">
                Ongoing Support
              </h1>
              <p className="font-avenir xl:text-lg lg:text-base text-gray_text">
                Our commitment to your success continues beyond implementation.
                We provide continuous support to ensure you consistently
                maximize the benefits of Zoho One.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 gap-10 mx-16 mb-[9.375rem]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imageUrl={feature.imageUrl}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <FooterTop content=" Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default DesktopDataManagement;
