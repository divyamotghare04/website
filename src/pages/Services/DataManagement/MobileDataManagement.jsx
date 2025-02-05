import React, { useState, useEffect } from "react";
import { reveal } from "../../../utils/helper";
import Navbar from "../../../UI/Navbar";
import FooterTop from "../../../UI/FooterTop";
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

import MobileNavbar from "../../../UI/MobileNavbar";

import mobileHomeBackground from "../../../assets/mobileHomeBackground.jpg";
import MobileFooter from "../../../UI/Footer/MobileFooter";
import MobileFooterTop from "../../../UI/MobileFooterTop";

const FeatureCard = ({ imageUrl, title, description }) => (
  <div className="flex flex-col items-center p-4 border border-solid border-green rounded-md reveal text-center">
    <div className="w-12 mb-4">
      <img src={imageUrl} alt={title} className="w-full" />
    </div>
    <h2 className="font-poppins text-lg font-semibold mb-2">{title}</h2>
    <p className="font-avenir text-sm text-gray_text">{description}</p>
  </div>
);

function MobileDataManagement() {
  const [activeTab, setActiveTab] = useState("Strategic Insights");

  const features = [
    {
      imageUrl: dataImage6,
      title: "Effortless Implementation",
      description: "Seamless transition to Zoho One with expert assistance.",
    },
    {
      imageUrl: dataImage5,
      title: "Tailored Customization",
      description: "Personalized Zoho One applications to fit your business.",
    },
    {
      imageUrl: dataImage4,
      title: "Seamless Integration",
      description: "Unified workflow with perfect system integration.",
    },
    {
      imageUrl: dataImage3,
      title: "Ongoing Support",
      description: "Continuous support for maximizing Zoho One benefits.",
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
      title: "Gain a competitive edge",
      description:
        "Unlock valuable patterns and trends for informed decisions.",
    },
    "Data Quality Assurance": {
      image: dataImage8,
      title: "Ensure accurate data",
      description:
        "Eliminate errors, duplicates, and inconsistencies effortlessly.",
    },
    "Data Integration": {
      image: dataImage9,
      title: "Unify your data sources",
      description:
        "Seamlessly consolidate data for better insights and efficiency.",
    },
    "Predictive Modelling": {
      image: dataImage7,
      title: "Forecast future trends",
      description: "Analyze historical data to anticipate business scenarios.",
    },
  };

  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: `url(${mobileHomeBackground})`,
        }}
      >
        <MobileNavbar />
        <div className="text-center p-6">
          <h1 className="text-3xl font-poppins text-white font-bold">
            Data Management
          </h1>
          <p className="text-xl text-white mt-2 font-avenir">
            Manage your data effectively to drive strategic decisions.
          </p>
        </div>
        <div className="mb-6">
          <img
            src={dataImage1}
            alt="Base image"
            className="w-full h-auto reveal p-4"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mb-6">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-sm rounded-md font-medium transition-colors ${
                activeTab === tab ? "bg-green text-white" : "bg-white border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab}
            className={`text-center flex p-4 ${
              activeTab === tab ? "block" : "hidden"
            }`}
          >
            <img
              src={tabContents[tab].image}
              alt={tab}
              className="w-40 mx-auto mb-4"
            />
            <div className="ml-2">
              <h2 className="text-lg font-semibold mb-2 ">
                {tabContents[tab].title}
              </h2>
              <p className="text-sm ">{tabContents[tab].description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 px-6 mb-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            imageUrl={feature.imageUrl}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <MobileFooterTop content="Unlock the full potential of your data. Contact us today!" />
    </div>
  );
}

export default MobileDataManagement;
