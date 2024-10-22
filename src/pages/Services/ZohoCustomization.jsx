import ImageScrollContent from "../../UI/ImageScrollContent";
import Navbar from "../../UI/Navbar";
import horizontalLogo from "../../assets/horizontal_blue_logo.png";

import zohoCusImage1 from "../../assets/zohoCusImage1.png";
import zohoCusImage2 from "../../assets/zohoCusImage2.png";
import zohoCusImage3 from "../../assets/zohoCusImage3.png";
import zohoCusImage4 from "../../assets/zohoCusImage4.png";
import zohoCusImage5 from "../../assets/zohoCusImage5.png";
import zohoCusImage6 from "../../assets/zohoCusImage6.png";

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

function ZohoCustomization() {
  return (
    <div>
      <Navbar logo={horizontalLogo} />
      <div className="flex justify-between mt-[157px] px-16 mb-12 ">
        <h1 className="font-inter font-extrabold xl:text-4xl lg:text-2xl">
          Zoho Customisation
        </h1>
        <p className="font-avenir xl:text-xl lg:text-base text-gray_text">
          Unlock the full potential of your business processes with Data
          Weaver's expert <br /> Zoho customization services. Our proven
          approach ensures that your unique <br /> needs are not just met, but
          exceeded, every step of the way.
        </p>
      </div>
      <div className="mb-[10rem]">
        <img src={zohoCusImage1} className="w-full" />
      </div>

      {/* <div className="flex  items-center justify-between m-20">
        <div className="">
          <img src={zohoCusImage2} />
        </div>
        <div className="lg:w-[30rem] xl:w-[50rem]">
          <h1 className="xl:text-4xl lg:text-2xl font-poppins font-bold mb-4">
            Understanding Your Business
          </h1>
          <p className="font-avenir xl:text-xl xl:w-[35rem]">
            We begin by diving deep into your business operations, workflows,
            and pain points. By understanding your challenges, we can identify
            opportunities for improvement and growth
          </p>
        </div>
      </div> */}
      <div className="">
        <ImageScrollContent steps={images} />
      </div>
    </div>
  );
}

export default ZohoCustomization;
