import ImageScrollContent from "../../../UI/ImageScrollContent";
import Navbar from "../../../UI/Navbar";
import horizontalLogo from "../../../assets/horizontal_blue_logo.png";

import zohoCusImage1 from "../../../assets/zohoCusImage1.png";
import zohoCusImage2 from "../../../assets/zohoCusImage2.png";
import zohoCusImage3 from "../../../assets/zohoCusImage3.png";
import zohoCusImage4 from "../../../assets/zohoCusImage4.png";
import zohoCusImage5 from "../../../assets/zohoCusImage5.png";
import zohoCusImage6 from "../../../assets/zohoCusImage6.png";
import { useEffect } from "react";
import { reveal } from "../../../utils/helper";
import FooterTop from "../../../UI/FooterTop";

const images = [
  {
    src: zohoCusImage2,
    title: "Understanding Your Business",
    content:
      "We begin by diving deep into your business operations, workflows, and pain points. By understanding your challenges, we can identify opportunities for improvement and growth.",
  },
  {
    src: zohoCusImage3,
    title: "Evaluating Every Detail",
    content:
      "Our experienced team meticulously evaluates all aspects of your processes, leaving no stone unturned. From bottlenecks to inefficiencies, we pinpoint areas ripe for optimization.",
  },
  {
    src: zohoCusImage4,
    title: "Tailored Strategies for Success",
    content:
      "Armed with insights, we craft customized strategies to address your specific needs. Whether it's fine-tuning Zoho software or integrating additional solutions, we ensure a perfect fit for your business.",
  },
  {
    src: zohoCusImage5,
    title: "Expert Execution, Every Time",
    content:
      "With a solid plan in hand, we execute with precision. Whether it's customizing Zoho software or deploying additional solutions, our team delivers results you can count on.",
  },
  {
    src: zohoCusImage6,
    title: "Seamless Deployment, Seamless Success",
    content:
      "Finally, we deploy our tailored solutions into your system, ensuring a smooth transition. You'll quickly start reaping the benefits of improved processes and increased efficiency.",
  },
];

function DesktopZohoCustomization() {
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
      <Navbar logo={horizontalLogo} />
      <div className="flex justify-between mt-[157px] px-16 mb-12 reveal  xxl:ml-[20rem] xxl:mt-[15rem] xxl:mr-[15rem]">
        <h1 className=" xxl:mr-[20rem] font-inter font-extrabold xxl:text-5xl xl:text-4xl lg:text-2xl">
          Zoho Customisation
        </h1>
        <p className="font-avenir xxl:text-2xl xl:text-xl lg:text-base text-gray_text">
          Unlock the full potential of your business processes with Data
          Weaver's expert <br /> Zoho customization services. Our proven
          approach ensures that your unique <br /> needs are not just met, but
          exceeded, every step of the way.
        </p>
      </div>
      <div className="mb-[10rem] reveal">
        <img src={zohoCusImage1} className="w-full" />
      </div>

      <div className="">
        <ImageScrollContent steps={images} />
      </div>
      <FooterTop content="At Data Weaver, we're not just Zoho Customization - we're about empowering your business for success. Trust us to understand your needs, strategize effectively, and execute flawlessly. Experience the Data Weaver today!" />
    </div>
  );
}

export default DesktopZohoCustomization;
