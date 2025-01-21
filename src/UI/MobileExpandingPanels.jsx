import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import homeImage4 from "../assets/homeImage4.png";
import homeImage5 from "../assets/homeImage5.png";
import homeImage6 from "../assets/homeImage6.png";

function MobileExpandingPanels() {
  const [activeTab, setActiveTab] = useState("zoho");

  const tabs = [
    {
      id: "zoho",
      title: "ZOHO Customisation",
      content:
        "We'll help you automate and digitize your business, with Zoho One, a powerful cloud-based tool & a one-stop-shop for all your digital apps!",
      image: homeImage4,
    },
    {
      id: "erp",
      title: "ERP",
      content:
        "We’ll help you automate and digitize your business, with Zoho One, a powerful cloud-based tool & a one-stop-shop for all your digital apps!",
      image: homeImage5,
    },
    {
      id: "data",
      title: "DATA MANAGEMENT",
      content:
        "Don't let your data go to waste—unlock its full potential with Data Weaver's data management solutions. Transform raw data into actionable insights and drive innovation across your organization. Contact us today to embark on your journey towards data-driven success!",
      image: homeImage6,
    },
  ];

  const handleNext = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex].id);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Active Block */}
      <div
        className="w-full h-[20rem] flex flex-col justify-end p-6 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${
            tabs.find((tab) => tab.id === activeTab).image
          })`,
        }}
      >
        <div className="bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-xl font-bold mb-2">
            {tabs.find((tab) => tab.id === activeTab).title}
          </h2>
          <p className="text-sm">
            {tabs.find((tab) => tab.id === activeTab).content}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="p-3 bg-white text-green border border-green  hover:bg-green hover:text-white transition-colors"
        >
          <GoArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-white text-green border border-green  hover:bg-green hover:text-white transition-colors"
        >
          <GoArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default MobileExpandingPanels;
