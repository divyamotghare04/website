import logoBlue from "../../assets/horizontal_blue_logo.png";
import FooterTop from "../../UI/FooterTop";
import Navbar from "../../UI/Navbar";
import erpConsultationImage1 from "../../assets/erpConsultationImage1.png";
import erpConsultationImage2 from "../../assets/erpConsultationImage2.png";
import { useEffect } from "react";
import { reveal } from "../../utils/helper";

function ErpConsultation() {
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
      <Navbar logo={logoBlue} />
      <div className="mt-[9.8125rem] flex items-start justify-between mx-16 mb-10 reveal xxl:ml-[24rem] xxl:mt-[15rem] xxl:mr-[24rem]">
        <div>
          <h1 className=" xxl:mr-[20rem] xxl:text-6xl font-inter font-extrabold lg:text-2xl xl:text-4xl text-black">
            ERP Consultation
          </h1>
        </div>
        <div className="xl:w-[45rem] lg:w-[36rem]">
          <p className="font-avenir xxl:text-2xl xl:text-xl lg:text-base text-gray_text">
            At Data Weaver, our team of ERP experts goes the extra mile to
            ensure your ERP implementation is optimized to perfection. Through
            on-site factory visits, we dive deep into your business processes,
            gaining invaluable insights to craft tailored solutions.
          </p>
        </div>
      </div>
      <div>
        <img src={erpConsultationImage1} className="w-full h-auto reveal" />
      </div>
      <div className="flex xl:p-20 xl:m-10 lg:p-16 items-center justify-center reveal">
        <div className="lg:size-80 w-full h-full xxl:w-96 xxl:h-full lg:mr-[5rem] ">
          <img src={erpConsultationImage2} />
        </div>
        <div className="lg:w-[30rem] xl:w-[62rem] ">
          <h1 className="font-poppins text-gray_text xl:text-3xl xxl:text-4xl lg:text-xl font-bold mb-4">
            Future-Proof Your Operations with Tailored Software Solutions
          </h1>
          <p className="mb-4 font-avenir xxl:text-2xl xl:text-xl lg:text-base text-gray_text">
            By understanding your exact needs and future aspirations, we
            future-proof your operations while recommending the most suitable
            software solutions.
          </p>
          <p className="font-avenir xxl:text-2xl xl:text-xl lg:text-base text-gray_text">
            With tailored strategies and meticulous attention to detail, we
            guide you through every step of the process, from planning to
            execution, to drive efficiency and boost productivity across your
            organization.
          </p>
        </div>
      </div>
      <div className="flex justify-center text-center reveal">
        <h3 className="font-avenir font-semibold lg:text-xl xl:text-3xl lg:px-10 xl:px-20 mx-20 mb-16">
          Our seasoned consultants bring a wealth of experience to the table,
          offering a complete suite of services tailored to your unique needs:
        </h3>
      </div>
      <div className="flex xl:mx-20 xl:px-8 lg:mx-5 items-center justify-center mb-6 reveal">
        <div className="xl:px-10 xl:py-8 lg:px-5 lg:py-4 border xl:w-[26rem] lg:w-[20rem] border-solid lg:h-[9rem] xl:h-[12rem] border-green mr-6">
          <h1 className="font-poppins font-semibold mb-4 xl:text-2xl lg:text-base">
            ERP Strategy Development:
          </h1>
          <p className="font-avenir text-gray_text xl:text-xl lg:text-sm">
            Craft a roadmap for success with strategic planning and guidance.
          </p>
        </div>
        <div className="xl:px-10 xl:py-8 lg:px-5 lg:py-4 border xl:w-[26rem] lg:w-[20rem] border-solid lg:h-[9rem] xl:h-[12rem] border-green mr-6">
          <h1 className="font-poppins font-semibold mb-4 xl:text-2xl lg:text-base">
            ERP Software Selection and Implementation:
          </h1>
          <p className="font-avenir text-gray_text xl:text-xl lg:text-sm">
            Choose and deploy the perfect ERP solution for your business
            seamlessly.
          </p>
        </div>
        <div className="xl:px-10 xl:py-8 lg:px-5 lg:py-4 xl:w-[26rem] lg:w-[20rem] lg:h-[9rem] border-solid xl:h-[12rem] border border-green">
          <h1 className="font-poppins font-semibold mb-4 xl:text-2xl lg:text-base">
            ERP Upgrades and Replacement:
          </h1>
          <p className="font-avenir text-gray_text xl:text-xl lg:text-sm">
            Stay ahead of the curve with smooth upgrades and seamless
            transitions.
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-[10rem] reveal">
        <div className="xl:px-10 xl:py-8 lg:px-5 lg:py-4 border w-[26rem] lg:h-[9rem] xl:h-[12rem] border-solid border-green mr-6">
          <h1 className="font-poppins font-semibold mb-4 xl:text-2xl lg:text-base">
            ERP Solution Customization:
          </h1>
          <p className="font-avenir text-gray_text xl:text-xl lg:text-sm">
            Tailor your ERP system to fit your business like a glove.
          </p>
        </div>
        <div className="xl:px-10 xl:py-8 lg:px-5 lg:py-4 border xl:w-[26rem] lg:h-[9rem] xl:h-[12rem] border-solid lg:w-[20rem] border-green">
          <h1 className="font-poppins font-semibold mb-4 xl:text-2xl lg:text-base">
            ERP Assessment and Evaluation:
          </h1>
          <p className="font-avenir text-gray_text xl:text-xl lg:text-sm">
            Gain valuable insights and optimize your ERP.
          </p>
        </div>
      </div>
      <FooterTop content="Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default ErpConsultation;
