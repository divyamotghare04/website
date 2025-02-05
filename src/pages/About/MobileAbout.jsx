import MobileFooterTop from "../../UI/MobileFooterTop";
import mobileHomeBackground from "../../assets/mobileHomeBackground.jpg";
import { GrMenu } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import mobileAbout1 from "../../assets/mobileAbout1.png";
import MobileNavbar from "../../UI/MobileNavbar";

import { reveal, brandLogos } from "../../utils/helper";
import { useOnScreen } from "../../Hooks/useOnScreen";
import { useCountUp } from "../../Hooks/useCountUp";

import aboutImage4 from "../../assets/aboutImage4.svg";
import aboutImage5 from "../../assets/aboutImage5.svg";
import aboutImage6 from "../../assets/aboutImage6.svg";
import aboutImage7 from "../../assets/aboutImage7.svg";
import aboutImage8 from "../../assets/aboutImage8.svg";

const StatItem = ({ value, label, shouldAnimate }) => {
  const count = useCountUp(value, 1000, shouldAnimate);

  return (
    <div className="h-[1rem] w-[1rem]">
      <h1 className="font-poppins font-bold text-xl text-green">{count}+</h1>
      <p className="text-lg font-avenir">{label}</p>
    </div>
  );
};

function MobileAbout() {
  const ref = useRef();
  const shouldAnimate = useOnScreen(ref);

  useEffect(() => {
    reveal();

    window.addEventListener("scroll", reveal);

    return () => window.removeEventListener("scroll", reveal);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <main className="">
        <div
          className=""
          style={{
            backgroundImage: `url(${mobileHomeBackground})`,
          }}
        >
          <MobileNavbar />
          <section className="mb-8 p-4 flex flex-col items-center">
            <h1 className="text-2xl text-white font-bold mb-4">
              Born from Dreams, Powered by Innovation: Introducing Dataweaver!
            </h1>
            <div className="relative w-full h-full mb-6">
              <img
                src={mobileAbout1}
                alt="Office view with silhouettes"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white overflow-hidden w-[21.5rem]  border-y-2 shadow-lg  border-solid  border-blue_data ">
              <div className="flex marqueemobile animate-marquee">
                {brandLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 marqueeOnemobile w-20 h-20 mx-4"
                  >
                    <img
                      src={logo}
                      alt={`Brand logo ${index + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-center items-center mt-10 mx-10 ">
          <div
            ref={ref}
            className="flex w-[40rem] justify-between text-center items-center p-5 bg-white mr-10"
          >
            <StatItem
              value={100}
              label="Projects"
              shouldAnimate={shouldAnimate}
            />
            <StatItem
              value={50}
              label="Clients"
              shouldAnimate={shouldAnimate}
            />
            <StatItem value={15} label="Teams" shouldAnimate={shouldAnimate} />
          </div>
        </div>

        <section className="mb-8 mt-10 px-5">
          <div className="bg-blue_text text-white p-4 mb-4">
            <h2 className="text-lg font-bold">OUR MISSION</h2>
          </div>
          <p className="text-lg font-semibold mb-2">
            Data Weaver, driven by passion and enthusiasm.
          </p>
          <p className="text-gray-600">
            We specialise in taking your business digital, by optimizing the
            processes & simplifying your digital journey. Our qualified team of
            professionals, is just the right ones, who vision the potential of
            your business, by fostering clever IT recommendations.
          </p>
        </section>

        <section className="mb-8 mt-10 px-5">
          <div className="bg-blue_text text-white p-4 mb-4">
            <h2 className="text-lg font-bold">OUR VISION</h2>
          </div>
          <p className="text-lg font-semibold mb-2">
            Tailored technology services to strengthen business operations.
          </p>
          <p className="text-gray-600">
            To drive profitable results by understanding the business process
            and unravelling the best suited solutions. We visualize to help you
            expand & boost your business, by consulting suitable digital
            strategies & software that accelerates business growth.
          </p>
        </section>

        <section className="mb-8 mt-10 px-5">
          <div className="bg-blue_text text-white p-4 mb-4">
            <h2 className="text-lg font-bold">OUR PROCESS</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "UNDERSTAND",
                desc: "your business process",
                img: aboutImage4,
              },
              {
                title: "EVALUATE",
                desc: "the bottleneck",
                img: aboutImage5,
              },
              {
                title: "STRATEGISE",
                desc: "and provide Top-notch solutions",
                img: aboutImage6,
              },
              { title: "EXECUTE", desc: "the strategy", img: aboutImage8 },
              { title: "DEPLOY", desc: "the software", img: aboutImage7 },
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center mr-5">
                  <img src={step.img} alt={step.title} className="w-20 h-20" />
                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <MobileFooterTop content="Join us in shaping the future of technology together! Experience the Data Weaver difference today." />
    </div>
  );
}

export default MobileAbout;
