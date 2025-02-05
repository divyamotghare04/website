import { Link } from "react-router-dom";
import { useEffect } from "react";
import { reveal } from "../../../../utils/helper";
import { FaChevronRight } from "react-icons/fa";

import horizontalBlueLogo from "../../../../assets/horizontal_blue_logo.png";
import zohoImage1 from "../../../../assets/zohoImage1.png";
import zohoImage2 from "../../../../assets/zohoImage2.svg";
import zohoImage3 from "../../../../assets/zohoImage3.svg";
import zohoImage4 from "../../../../assets/zohoImage4.svg";
import zohoImage5 from "../../../../assets/zohoImage5.svg";
import zohoImage6 from "../../../../assets/zohoImage6.png";

import MobileFooterTop from "../../../../UI/MobileFooterTop";
import mobileHomeBackground from "../../../../assets/mobileHomeBackground.jpg";
import MobileNavbar from "../../../../UI/MobileNavbar";

const navigation = [
  { name: "Sales", href: "/products/zoho-one/sales" },
  { name: "Marketing", href: "/products/zoho-one/marketing" },
  { name: "Finance", href: "/products/zoho-one/finance" },
  { name: "HR", href: "/products/zoho-one/hr" },
  { name: "BI & Analytics", href: "/products/zoho-one/bi-analytics" },
];

const features = [
  {
    img: zohoImage2,
    title: "Effortless Implementation",
    description:
      "Our expert team ensures a smooth, hassle-free transition to Zoho One, enabling your business to quickly harness its full potential.",
  },
  {
    img: zohoImage4,
    title: "Tailored Customization",
    description:
      "We work closely with you to personalize Zoho One applications, perfectly aligning them with your unique business processes and objectives.",
  },
  {
    img: zohoImage5,
    title: "Seamless Integration",
    description:
      "We flawlessly integrate Zoho One applications with your existing systems, creating a unified and efficient workflow.",
  },
  {
    img: zohoImage3,
    title: "Ongoing Support",
    description:
      "Our commitment to your success continues beyond implementation. We provide continuous support to ensure you consistently maximize the benefits of Zoho One.",
  },
];

function MobileZohoOne() {
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
        <MobileNavbar logo={horizontalBlueLogo} />

        <div className="my-2 flex flex-col md:flex-row items-center justify-between mx-6 md:mx-16 mb-10 reveal">
          <h1 className="text-white font-extrabold text-3xl mb-4">Zoho One</h1>
          <p className="font-avenir text-white text-xl">
            Welcome to Data Weaver, where we elevate your business to new
            heights with our expert IT and data analytics services. Partnering
            with Zoho One, a cutting-edge suite of innovative applications, we
            offer a tailored approach to maximize its potential for your unique
            business requirements.
          </p>
        </div>

        <div className="mb-20 p-4 reveal flex justify-center">
          <img
            src={zohoImage1}
            alt="Zoho One"
            className="w-full md:w-4/5 h-full"
          />
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-16 mb-20 reveal">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex justify-between items-center p-6 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-green-500 transition-all duration-300"
            >
              <span className="text-gray-800 font-bold text-xl">
                {item.name}
              </span>
              <FaChevronRight className="text-green-500 text-2xl" />
            </Link>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 xl:mx-16 lg:mx-5 xl:mb-[12.5rem] reveal">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-row items-center p-6 border border-solid border-green rounded-lg"
          >
            <div className="w-1/3 flex justify-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="max-h-32 w-auto"
              />
            </div>
            <div className="w-2/3 pl-6">
              <h2 className="font-poppins font-semibold text-xl md:text-2xl mb-3">
                {feature.title}
              </h2>
              <p className="text-gray_text font-avenir text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between h-auto mx-6 md:mx-16 mt-10 mb-[8rem] reveal">
        <div className="w-full md:w-1/2 flex justify-center mb-4">
          <img
            src={zohoImage6}
            alt="Experience Data Weaver Difference"
            className="max-w-[80%] md:max-w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray_text md:pl-10">
          <h1 className="font-poppins font-bold text-xl md:text-3xl mb-5">
            Experience the Data Weaver Difference
          </h1>
          <p className="font-avenir text-base md:text-lg mb-3">
            Discover how expert IT and data analytics, paired with unparalleled
            customer support, can elevate your business...
          </p>
          <p className="font-avenir text-base md:text-lg">
            At Data Weaver, we don't just offer services; we become your
            dedicated partner in business growth...
          </p>
        </div>
      </section>

      <MobileFooterTop content="Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default MobileZohoOne;
