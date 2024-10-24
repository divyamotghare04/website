import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import homeImage4 from "../assets/homeImage4.png";
import homeImage5 from "../assets/homeImage5.png";
import homeImage6 from "../assets/homeImage6.png";

function ExpandingPanels() {
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
    <div>
      <div className="flex flex-1">
        <div className="flex h-[30rem]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`xl:h-[30rem] lg:h-[26rem] xl:ml-10 lg:ml-6 bg-blue_home text-white font-bold font-poppins text-xl relative cursor-pointer transition-all duration-300 ease-in-out
                ${
                  activeTab === tab.id
                    ? "xl:w-[40rem] lg:w-[30rem]"
                    : "xl:w-[7rem] lg:w-[5rem]"
                }`}
              onMouseEnter={() => setActiveTab(tab.id)}
              style={{
                backgroundImage:
                  activeTab === tab.id ? `url(${tab.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap origin-center -rotate-90
                  ${activeTab === tab.id ? "opacity-0" : ""}`}
              >
                {tab.title}
              </h1>

              {activeTab === tab.id && (
                <div className="p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
                  <h2 className="text-2xl font-bold mb-4">{tab.title}</h2>
                  <p className="text-base mb-6 max-w-[80%]">{tab.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-4 xl:ml-10 lg:ml-6">
        <button
          onClick={handlePrev}
          className="p-2 bg-white text-green border border-green hover:bg-green hover:text-white transition-colors"
        >
          <GoArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-white text-green border border-green hover:bg-green hover:text-white transition-colors"
        >
          <GoArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default ExpandingPanels;
