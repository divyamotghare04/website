import { FaChevronRight } from "react-icons/fa";
import Navbar from "../../../UI/Navbar";
import FooterTop from "../../../UI/FooterTop";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { reveal } from "../../../utils/helper";

import horizontalBlueLogo from "../../../assets/horizontal_blue_logo.png";
import zohoImage1 from "../../../assets/zohoImage1.png";
import zohoImage2 from "../../../assets/zohoImage2.svg";
import zohoImage3 from "../../../assets/zohoImage3.svg";
import zohoImage4 from "../../../assets/zohoImage4.svg";
import zohoImage5 from "../../../assets/zohoImage5.svg";
import zohoImage6 from "../../../assets/zohoImage6.png";

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

function ZohoOne() {
  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div>
      <Navbar logo={horizontalBlueLogo} />
      <div className="mt-[9.8125rem] flex items-start justify-between mx-16 mb-10 reveal xxl:ml-[24rem] xxl:mt-[15rem] xxl:mr-[24rem]">
        <div>
          <h1 className=" xxl:mr-[20rem] xxl:text-6xl font-inter font-extrabold lg:text-2xl xl:text-4xl text-black">
            Zoho One
          </h1>
        </div>
        <div className="xl:w-[45rem] lg:w-[36rem]">
          <p className="font-avenir xxl:text-2xl xl:text-xl lg:text-base text-gray_text">
            Welcome to Data Weaver, where we elevate your business to new
            heights with our expert IT and data analytics services. Partnering
            with Zoho One, a cutting-edge suite of innovative applications, we
            offer a tailored approach to maximize its potential for your unique
            business requirements.
          </p>
        </div>
      </div>

      <div className="mb-20 reveal">
        <img src={zohoImage1} alt="Zoho One Image" className="w-full h-auto" />
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-16 mb-20 reveal">
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex justify-center items-center p-6 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-green-500 transition-all duration-300"
              >
                <span className="text-gray-800 font-poppins font-bold text-xl">
                  {item.name}
                </span>
                <FaChevronRight className="text-green-500 text-2xl ml-10" />
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 reveal sm:grid-cols-2 gap-6 max-w-[66%] mx-auto">
            {navigation.slice(3).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex justify-center items-center p-6 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-green-500 transition-all duration-300"
              >
                <span className="text-gray-800 font-poppins font-bold text-xl">
                  {item.name}
                </span>
                <FaChevronRight className="text-green-500 text-2xl ml-10" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center mb-10 reveal">
        <h1 className="font-poppins font-bold text-gray_text xl:text-3xl lg:text-2xl">
          At Data Weaver, we excel in...
        </h1>
      </section>

      <section className="grid grid-cols-2 gap-y-10 xl:px-20 lg:px-3 xl:mx-16 lg:mx-5 xl:mb-[12.5rem] reveal">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex py-10 pl-5 border border-solid items-center justify-center border-green ml-10"
          >
            <img src={feature.img} alt={feature.title} className="mr-10" />
            <div className="w-[25rem]">
              <h2 className="font-poppins font-semibold xxl:text-3xl xl:text-2xl lg:text-xl mb-4">
                {feature.title}
              </h2>
              <p className="text-gray_text font-avenir text-lg xxl:text-xl">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="flex justify-center  items-center h-[30rem] mx-16 mt-20 mb-[13rem] reveal">
        <img
          src={zohoImage6}
          alt="Experience Data Weaver Difference"
          className="mr-16"
        />
        <div className="w-[35rem] text-gray_text xxl:ml-[10rem]">
          <h1 className="font-poppins font-bold xl:text-3xl lg:text-xl mb-5">
            Experience the Data Weaver Difference
          </h1>
          <p className="font-avenir xl:text-xl mb-3 ">
            Discover how expert IT and data analytics, paired with unparalleled
            customer support, can elevate your business...
          </p>
          <p className="font-avenir xl:text-xl">
            At Data Weaver, we don't just offer services; we become your
            dedicated partner in business growth...
          </p>
        </div>
      </section>

      <FooterTop content="Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default ZohoOne;
