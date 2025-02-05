import { FaLinkedin } from "react-icons/fa";
import ContactForm from "../../UI/ContactForm";
import MobileNavbar from "../../UI/MobileNavbar";
import contactImage1 from "../../assets/contactImage1.png";
import contactImage2 from "../../assets/contactImage2.png";
import contactImage3 from "../../assets/contactImage3.png";
import contactImage4 from "../../assets/contactImage4.png";
import contactImage5 from "../../assets/contactImage5.png";
import logo from "../../assets/horizontal_logo.png";
import { useEffect } from "react";
import { reveal } from "../../utils/helper";
import mobileHomeBackground from "../../assets/mobileHomeBackground.jpg";

function MobileContact() {
  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${mobileHomeBackground})`,
        }}
      >
        <MobileNavbar />

        <div className="  flex flex-col justify-center items-center text-center  ">
          <h1 className="font-poppins font-semibold text-3xl text-white mt-[5rem] ">
            Contact Us
          </h1>
          <div className="">
            <img
              src={contactImage1}
              alt="Contact Graphic"
              className="w-full p-4"
            />
          </div>
        </div>
      </div>

      <div className="px-6 text-center mt-10 ">
        <h1 className="font-poppins bg-blue_text p-2 text-white font-semibold text-xl mb-4">
          Contact Information
        </h1>
      </div>

      <div className="px-6">
        <h1 className="font-poppins text-lg font-medium">Mumbai Information</h1>
        <div className="space-y-6 mt-4">
          <div className="flex items-center space-x-4">
            <img src={contactImage4} alt="Phone Icon" className="w-6" />
            <p>+91-9702702480</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={contactImage3} alt="Email Icon" className="w-6" />
            <p>info@dataweaver.in</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={contactImage2} alt="Location Icon" className="w-6" />
            <p>Mumbai, IN</p>
          </div>
        </div>
      </div>

      <div className="px-6 my-6">
        <h1 className="font-poppins text-lg font-medium">Poland Information</h1>
        <div className="space-y-6 mt-4">
          <div className="flex items-center space-x-4">
            <img src={contactImage4} alt="Phone Icon" className="w-6" />
            <p>+48 579133241</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={contactImage3} alt="Email Icon" className="w-6" />
            <p>info@dataweaver.pl</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={contactImage2} alt="Location Icon" className="w-6" />
            <p>Wrocław, Poland</p>
          </div>
        </div>
      </div>

      <div className="px-6 mt-8 mb-10">
        <ContactForm />
      </div>

      <div className="px-6 mt-8 text-center">
        <h1 className="font-poppins text-white p-2 font-semibold text-xl bg-blue_text">
          Our Location
        </h1>
        <div className="mt-4">
          <h3 className="font-poppins text-lg">Mumbai Office</h3>
          <iframe
            width="100%"
            height="200"
            frameBorder="0"
            src="https://maps.google.com/maps?width=500&amp;height=200&amp;hl=en&amp;q=167,%20Dr%20Annie%20Besant%20Rd,%20Worli%20Naka,%20Bhim%20Nagar,%20Mahalakshmi,%20Mumbai,%20Maharashtra%20400018,%20India+(Data%20Weaver%20LLP)&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-poppins text-lg">Poland Office</h3>
          <iframe
            width="100%"
            height="200"
            frameBorder="0"
            src="https://maps.google.com/maps?width=500&amp;height=200&amp;hl=en&amp;q=BIA%C5%81OWIESKA,%20NR%20121,%20lok.%2035,%20Miejsc.%20Wroc%C5%82aw-%2054-234%20Dolnoslaskie,%20Poland+(Data%20Weaver%20LLP)&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
      </div>

      <div className="px-6 mt-8 text-center">
        <h1 className="font-poppins font-semibold text-xl text-white bg-blue_text p-2">
          Follow Us on
        </h1>
        <div className="mt-2 flex justify-center">
          <a
            href="https://www.linkedin.com/company/data-weaver-llp/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300"
          >
            <img src={contactImage5} alt="LinkedIn Icon" className="w-10" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileContact;
