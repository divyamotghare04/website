import logoBlue from "../../assets/horizontal_blue_logo.png";
import FooterTop from "../../UI/FooterTop";
import Navbar from "../../UI/Navbar";
import erpConsultationImage1 from "../../assets/erpConsultationImage1.svg";
import erpConsultationImage2 from "../../assets/erpConsultationImage2.svg";

function ErpConsultation() {
  return (
    <div>
      <Navbar logo={logoBlue} />
      <div className="mt-[157px] flex items-start justify-between mx-16 mb-10">
        <div>
          <h1 className="font-inter font-extrabold text-4xl text-black">
            ERP Consultation
          </h1>
        </div>
        <div className="w-[725px]">
          <p className="font-avenir text-xl text-gray_text">
            At Data Weaver, our team of ERP experts goes the extra mile to
            ensure your ERP implementation is optimized to perfection. Through
            on-site factory visits, we dive deep into your business processes,
            gaining invaluable insights to craft tailored solutions.
          </p>
        </div>
      </div>
      <div>
        <img src={erpConsultationImage1} className="w-full h-auto" />
      </div>
      <div className="flex p-20 m-10 items-center justify-between">
        <div>
          <img src={erpConsultationImage2} />
        </div>
        <div className="w-[570px]">
          <h1 className="font-poppins text-gray_text text-3xl font-bold mb-4">
            Future-Proof Your Operations with Tailored Software Solutions
          </h1>
          <p className="mb-4 font-avenir text-xl text-gray_text">
            By understanding your exact needs and future aspirations, we
            future-proof your operations while recommending the most suitable
            software solutions.
          </p>
          <p className=" font-avenir text-xl text-gray_text">
            With tailored strategies and meticulous attention to detail, we
            guide you through every step of the process, from planning to
            execution, to drive efficiency and boost productivity across your
            organization.
          </p>
        </div>
      </div>
      <FooterTop content=" Experience the power of reliable, strategic data management with Data Weaver. Elevate your business potential and unlock endless possibilities. Contact us today to learn more!" />
    </div>
  );
}

export default ErpConsultation;
