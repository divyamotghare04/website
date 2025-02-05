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
import MobileNavbar from "../../../UI/MobileNavbar";

import mobileHomeBackground from "../../../assets/mobileHomeBackground.jpg";
import MobileFooterTop from "../../../UI/MobileFooterTop";
import MobileImageScrollContent from "../../../UI/MobileImageScrollContent";

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
function MobileZohoCustomization() {
  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="">
      <div
        className=""
        style={{
          backgroundImage: `url(${mobileHomeBackground})`,
        }}
      >
        <MobileNavbar />

        <div className="p-5 text-center reveal">
          <h1 className="text-3xl text-white font-bold">Zoho Customization</h1>
          <p className="text-xl text-white mt-4">
            Unlock the full potential of your business with Data Weaver's expert
            Zoho customization services. Our proven approach ensures that your
            unique needs are exceeded, every step of the way.
          </p>
        </div>

        <div className="mt-8 reveal p-4">
          <img
            src={zohoCusImage1}
            className="w-full "
            alt="Zoho Customization"
          />
        </div>
      </div>
      <div className="mt-12">
        <MobileImageScrollContent steps={images} />
      </div>

      <MobileFooterTop content="At Data Weaver, we're not just Zoho Customization - we're about empowering your business for success." />
    </div>
  );
}

export default MobileZohoCustomization;
