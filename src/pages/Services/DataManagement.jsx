import Navbar from "../../UI/Navbar";
import logoBlue from "../../assets/horizontal_blue_logo.png";
import dataImage1 from "../../assets/dataImage1.png";
import dataImage2 from "../../assets/dataImage2.svg";
import dataImage3 from "../../assets/dataImage3.png";
import dataImage4 from "../../assets/dataImage4.png";
import dataImage5 from "../../assets/dataImage5.png";
import dataImage6 from "../../assets/dataImage6.png";
import dataImage7 from "../../assets/dataImage7.png";
import dataImage8 from "../../assets/dataImage8.png";
import dataImage9 from "../../assets/dataImage9.png";

import FooterTop from "../../UI/FooterTop";
import { useState } from "react";

function DataManagement() {
  const [activeTab, setActiveTab] = useState("Strategic Insights");

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

  return (
    <div>
      <Navbar logo={logoBlue} />
      <div className="flex justify-between mt-[9.8125rem] px-16 mb-12">
        <h1 className="font-inter font-extrabold xl:text-4xl lg:text-2xl">
          Data Management
        </h1>
        <p className="font-avenir xl:text-xl lg:text-base text-gray_text">
          In today's data-driven world, success hinges on the ability to harness
          the full <br /> potential of your data. At Data Weaver, we understand
          that managing data isn't <br /> just about storage—it's about
          unleashing its power to drive strategic decision- <br /> making and
          fuel business growth.
        </p>
      </div>

      <div className="mb-[4.375rem]">
        <img src={dataImage1} alt="Base image" className="w-full h-auto" />
      </div>
      <div className="mb-[9.375rem]">
        <div className="flex gap-12 justify-center mb-[7.5rem]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-poppins text-base px-4 py-2 rounded-md transition-colors ${
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
            className={`flex xl:mx-[10rem] lg:mx-16 items-center justify-between ${
              activeTab === tab ? "block" : "hidden"
            }`}
          >
            <div className="mr-20">
              <img src={tabContents[tab].image} alt={tab} />
            </div>
            <div className="lg:w-[32rem]">
              <h1 className="font-poppins font-bold xl:text-3xl lg:text-2xl mb-4">
                {tabContents[tab].title}
              </h1>
              <p className="font-avenir text-gray_text">
                {tabContents[tab].description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-10 mx-16 mb-[9.375rem]">
        <div className="flex p-[0.625rem] border items-start justify-center border-green">
          <div className="lg:size-22">
            <img src={dataImage6} />
          </div>
          <div className="w-[20.625rem] ml-8">
            <h1 className="font-poppins mb-4 font-semibold text-2xl lg:text-xl">
              Effortless Implementation
            </h1>
            <p className="font-avenir text-lg lg:text-base text-gray_text">
              Our expert team ensures a smooth, hassle-free transition to Zoho
              One, enabling your business to quickly harness its full potential
            </p>
          </div>
        </div>
        <div className="flex p-[0.625rem] border items-start justify-center border-green">
          <div className="lg:size-22">
            <img src={dataImage5} />
          </div>
          <div className="w-[20.625rem] ml-8">
            <h1 className="font-poppins mb-4 font-semibold text-2xl lg:text-xl">
              Tailored Customization
            </h1>
            <p className="font-avenir lg:text-base text-lg text-gray_text">
              We work closely with you to personalize Zoho One applications,
              perfectly aligning them with your unique business processes and
              objectives
            </p>
          </div>
        </div>
        <div className="flex p-[0.625rem] border items-start justify-center border-green">
          <div className="lg:size-22">
            <img src={dataImage4} />
          </div>
          <div className="w-[20.625rem] ml-10">
            <h1 className="font-poppins mb-4 font-semibold text-2xl lg:text-xl">
              Seamless Integration
            </h1>
            <p className="font-avenir lg:text-base text-lg text-gray_text">
              We flawlessly integrate Zoho One applications with your existing
              systems, creating a unified and efficient workflow.
            </p>
          </div>
        </div>
        <div className="flex p-[0.625rem]  border items-start justify-center border-green">
          <div className="lg:size-22">
            <img src={dataImage3} />
          </div>
          <div className="w-[20.625rem] ml-10">
            <h1 className="font-poppins mb-4 font-semibold text-2xl lg:text-xl">
              Ongoing Support
            </h1>
            <p className="font-avenir text-lg lg:text-base text-gray_text">
              Our commitment to your success continues beyond implementation. We
              provide continuous support to ensure you consistently maximize the
              benefits of Zoho One.
            </p>
          </div>
        </div>
      </div>
      <FooterTop content=" Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default DataManagement;
