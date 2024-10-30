import { useEffect, useRef } from "react";
import { useCountUp } from "../Hooks/useCountUp";
import { useOnScreen } from "../Hooks/useOnScreen";

import FooterTop from "../UI/FooterTop";
import BlueBox from "../components/BlueBox";

import Navbar from "../UI/Navbar";
import blueLogo from "../assets/horizontal_blue_logo.png";
import aboutImage1 from "../assets/aboutImage1.png";
import aboutImage2 from "../assets/aboutImage2.png";
import aboutImage3 from "../assets/aboutImage3.png";
import aboutImage4 from "../assets/aboutImage4.svg";
import aboutImage5 from "../assets/aboutImage5.svg";
import aboutImage6 from "../assets/aboutImage6.svg";
import aboutImage7 from "../assets/aboutImage7.svg";
import aboutImage8 from "../assets/aboutImage8.svg";

import brandLogo1 from "../assets/brandLogo1.png";
import brandLogo2 from "../assets/brandLogo2.png";
import brandLogo3 from "../assets/brandLogo3.png";
import brandLogo4 from "../assets/brandLogo4.png";
import brandLogo5 from "../assets/brandLogo5.png";
import brandLogo6 from "../assets/brandLogo6.png";
import brandLogo7 from "../assets/brandLogo7.png";
import brandLogo8 from "../assets/brandLogo8.png";
import brandLogo9 from "../assets/brandLogo9.png";
import brandLogo10 from "../assets/brandLogo10.png";
import brandLogo11 from "../assets/brandLogo11.png";
import brandLogo12 from "../assets/brandLogo12.png";
import brandLogo13 from "../assets/brandLogo13.png";
import brandLogo14 from "../assets/brandLogo14.png";
import brandLogo15 from "../assets/brandLogo15.png";
import brandLogo16 from "../assets/brandLogo16.png";
import brandLogo17 from "../assets/brandLogo17.svg";
import { reveal } from "../utils/helper";

const StatItem = ({ value, label, shouldAnimate }) => {
  const count = useCountUp(value, 1000, shouldAnimate);

  return (
    <div className="h-[2rem] w-[2rem]">
      <h1 className="font-poppins font-bold text-4xl text-green">{count}+</h1>
      <p className="text-2xl font-avenir">{label}</p>
    </div>
  );
};

function About() {
  const ref = useRef();
  const shouldAnimate = useOnScreen(ref);

  useEffect(() => {
    // Call the reveal function on mount
    reveal();

    // Attach scroll event listener
    window.addEventListener("scroll", reveal);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const brandLogos = [
    brandLogo1,
    brandLogo2,
    brandLogo3,
    brandLogo4,
    brandLogo5,
    brandLogo6,
    brandLogo7,
    brandLogo8,
    brandLogo9,
    brandLogo10,
    brandLogo11,
    brandLogo12,
    brandLogo13,
    brandLogo14,
    brandLogo15,
    brandLogo16,
    brandLogo17,
  ];

  return (
    <div>
      <Navbar logo={blueLogo} />
      <div className="flex flex-col ">
        <div className="mt-[10rem] mb-10 reveal">
          <h1 className="ml-16 font-extrabold xl:text-4xl lg:text-2xl font-inter text-black">
            <div className="mb-2"> Born from Dreams, Powered by</div>
            <div>Innovation: Introducing Data Weaver!</div>
          </h1>
        </div>
        <div className="reveal ">
          <img
            alt="team business people"
            src={aboutImage1}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="overflow-hidden  border-b-4 shadow-lg  border-solid  border-white ">
          <div className="flex marquee animate-marquee">
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 marqueeOne w-32 h-32 mx-4"
              >
                <img
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className="marqueeTwo flex-shrink-0 w-32 h-32 mx-4"
              >
                <img
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}{" "}
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className="marqueeThree flex-shrink-0 w-32 h-32 mx-4"
              >
                <img
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}{" "}
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className="marqueeFour flex-shrink-0 w-32 h-32 mx-4"
              >
                <img
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 mx-10 mb-20 ">
        <div
          ref={ref}
          className="flex w-[600px] justify-between text-center items-center p-10 bg-white "
        >
          <StatItem value={25} label="Projects" shouldAnimate={shouldAnimate} />
          <StatItem value={15} label="Clients" shouldAnimate={shouldAnimate} />
          <StatItem value={10} label="Teams" shouldAnimate={shouldAnimate} />
        </div>
      </div>
      <div className="flex items-center ml-16 mb-[11rem] reveal">
        <div className="xl:w-[32.5rem] mr-10 lg:w-[25rem] lg:h-[25rem] xl:h-[32rem] flex flex-col justify-between">
          <div className="flex justify-between reveal">
            <BlueBox text2="OUR MISSION" className=" w-full h-full" />
            <img src={aboutImage2} className="xl:w-[15rem] lg:w-[11rem]" />
          </div>
          <img src={aboutImage3} className="reveal" />
        </div>

        <div className="mt-10 ml-20 xl:w-[30rem] lg:w-[25rem] reveal">
          <h1 className=" xl:text-3xl lg:text-2xl font-bold font-poppins text-gray_text">
            Data Weaver, driven by passion and enthusiasm.
          </h1>
          <p className="xl:text-lg w-[] font-normal mt-8 font-avenir text-balance text-gray_text">
            We specialise in taking your business digital, by optimizing the
            processes & simplifying your digital journey. Our qualified team of
            professionals, is just the right ones, who vision the potential of
            your business, by fostering clever IT recommendations.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end mb-[10rem]  xl:mx-16 lg:mr-10 reveal">
        <div className="mt-10 xl:ml-20 lg:mr-20 xl:w-[30rem] lg:w-[25rem]">
          <h1 className=" xl:text-3xl lg:text-2xl font-bold font-poppins text-gray_text">
            Tailored technology services to strengthen business operations.
          </h1>
          <p className="xl:text-lg w-[] font-normal mt-8 font-avenir text-balance text-gray_text">
            To drive profitable results by understanding the business process
            and unravelling the best suited solutions. We visualize to help you
            expand & boost your business, by consulting suitable digital
            strategies & software that accelerates business growth.
          </p>
        </div>
        <div className="xl:w-[32.5rem] mr-10 lg:w-[25rem] lg:h-[25rem] xl:h-[32rem] flex flex-col justify-between">
          <div className="flex justify-between reveal">
            <BlueBox text2="OUR VISION" className="  w-full h-full" />
            <img src={aboutImage2} className="xl:w-[15rem] lg:w-[11rem]" />
          </div>
          <img src={aboutImage3} className="reveal" />
        </div>
      </div>
      <div className="flex mb-16 ml-16 reveal">
        <BlueBox text2="OUR PROCESS" className="w-full h-full" />
      </div>
      <div className="flex justify-between items-start w-[full] h-[9rem] xl:mx-[11rem] lg:mx-[8rem] xl:mb-[30rem] lg:mb-[20rem] reveal">
        <div className="">
          <img src={aboutImage4} />
          <div className="py-2 mx-2 w-[10rem] mt-3">
            <h1 className="text-gray_text xl:font-bold lg:font-semibold xl:text-2xl lg:text-xl mb-4">
              UNDERSTAND
            </h1>
            <p className="xl:text-2xl lg:text-lg font-avenir text-gray_text">
              your business process
            </p>
          </div>
        </div>
        <div className="">
          <img src={aboutImage5} />
          <div className="py-2 mx-2 w-[10rem] mt-3">
            <h1 className="text-gray_text xl:font-bold lg:font-semibold xl:text-2xl lg:text-xl mb-4">
              EVALUATE
            </h1>
            <p className="xl:text-2xl lg:text-lg font-avenir text-gray_text">
              the bottleneck
            </p>
          </div>
        </div>{" "}
        <div className="">
          <img src={aboutImage6} />
          <div className="py-2 mx-2 w-[10rem] mt-6">
            <h1 className="text-gray_text xl:font-bold lg:font-semibold xl:text-2xl lg:text-xl mb-4">
              STRATEGISE
            </h1>
            <p className="xl:text-2xl lg:text-lg font-avenir text-gray_text">
              and provide Top-notch solutions
            </p>
          </div>
        </div>{" "}
        <div className="">
          <img className="w-[93px] h-[78px] " src={aboutImage8} />
          <div className="py-2 mx-2 w-[10rem] mt-4">
            <h1 className="text-gray_text xl:font-bold lg:font-semibold xl:text-2xl lg:text-xl mb-4">
              EXECUTE
            </h1>
            <p className="xl:text-2xl lg:text-lg font-avenir text-gray_text">
              the strategy
            </p>
          </div>
        </div>{" "}
        <div className="">
          <img className="size[75px]" src={aboutImage7} />
          <div className="py-2 mx-2 w-[10rem] mt-4">
            <h1 className="text-gray_text xl:font-bold lg:font-semibold xl:text-2xl lg:text-xl mb-4">
              DEPLOY
            </h1>
            <p className="xl:text-2xl lg:text-lg font-avenir text-gray_text">
              the software
            </p>
          </div>
        </div>
      </div>

      <FooterTop content="Join us in shaping the future of technology together! Experience the Data Weaver difference today." />
    </div>
  );
}

export default About;
