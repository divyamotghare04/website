import logoBlue from "../../../assets/horizontal_blue_logo.png";
import FooterTop from "../../../UI/FooterTop";
import Navbar from "../../../UI/Navbar";
import erpConsultationImage1 from "../../../assets/erpConsultationImage1.png";
import erpConsultationImage2 from "../../../assets/erpConsultationImage2.png";
import { useEffect } from "react";
import { reveal } from "../../../utils/helper";
import MobileNavbar from "../../../UI/MobileNavbar";

import mobileHomeBackground from "../../../assets/mobileHomeBackground.jpg";
import MobileFooterTop from "../../../UI/MobileFooterTop";

function MobileErpConsultation() {
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
        <MobileNavbar />
        <div className="mt-5 px-4 text-center reveal">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            ERP Consultation
          </h1>
          <p className="mt-4 text-white text-xl">
            At Data Weaver, our team of ERP experts goes the extra mile to
            ensure your ERP implementation is optimized to perfection. Through
            on-site factory visits, we dive deep into your business processes,
            gaining invaluable insights to craft tailored solutions.
          </p>
        </div>
        <div className="mt-6">
          <img
            src={erpConsultationImage1}
            className="w-full h-full reveal p-4"
            alt="ERP Consultation"
          />
        </div>
      </div>
      <div className="px-4 mt-10 text-center reveal">
        <h2 className="text-xl font-bold text-gray_text mb-5">
          Future-Proof Your Operations with Tailored Software Solutions
        </h2>
        <img
          src={erpConsultationImage2}
          className="w-full h-auto object-cover mb-6"
          alt="ERP Consultation"
        />

        <p className="mt-4 text-gray_text text-lg">
          By understanding your exact needs and future aspirations, we
          future-proof your operations while recommending the most suitable
          software solutions.
        </p>
        <p className="mt-2 text-gray_text text-lg">
          With tailored strategies and meticulous attention to detail, we guide
          you through every step of the process, from planning to execution, to
          drive efficiency and boost productivity across your organization.
        </p>
      </div>
      <div className="px-4 mt-10 text-center reveal">
        <h3 className="text-xl font-semibold text-gray_text sm:text-xl">
          Our seasoned consultants bring a wealth of experience to the table,
          offering a complete suite of services tailored to your unique needs:
        </h3>
      </div>
      <div className="px-4 my-6 grid gap-4 text-center reveal sm:grid-cols-2">
        <div className="p-4 border border-green rounded-lg">
          <h4 className="font-semibold text-lg">ERP Strategy Development</h4>
          <p className="text-gray_text text-sm">
            Craft a roadmap for success with strategic planning and guidance.
          </p>
        </div>
        <div className="p-4 border border-green rounded-lg">
          <h4 className="font-semibold text-lg">ERP Software Selection</h4>
          <p className="text-gray_text text-sm">
            Choose and deploy the perfect ERP solution seamlessly.
          </p>
        </div>
        <div className="p-4 border border-green rounded-lg">
          <h4 className="font-semibold text-lg">ERP Upgrades & Replacement</h4>
          <p className="text-gray_text text-sm">
            Stay ahead of the curve with smooth upgrades and transitions.
          </p>
        </div>
        <div className="p-4 border border-green rounded-lg">
          <h4 className="font-semibold text-lg">ERP Solution Customization</h4>
          <p className="text-gray_text text-sm">
            Tailor your ERP system to fit your business like a glove.
          </p>
        </div>
        <div className="p-4 border border-green rounded-lg">
          <h4 className="font-semibold text-lg">ERP Assessment & Evaluation</h4>
          <p className="text-gray_text text-sm">
            Gain valuable insights and optimize your ERP.
          </p>
        </div>
      </div>
      <MobileFooterTop content="Partner with Data Weaver and elevate your ERP experience to new heights!" />
    </div>
  );
}

export default MobileErpConsultation;
