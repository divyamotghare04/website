import { FaLinkedin } from "react-icons/fa";
import ContactForm from "../UI/ContactForm";
import Navbar from "../UI/Navbar";
import contactImage1 from "../assets/contactImage1.svg";
import contactImage2 from "../assets/contactImage2.png";
import contactImage3 from "../assets/contactImage3.png";
import contactImage4 from "../assets/contactImage4.png";
import contactImage5 from "../assets/contactImage5.png";

import logo from "../assets/horizontal_logo.png";
import { useEffect } from "react";
import { reveal } from "../utils/helper";

function Contact() {
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
      <Navbar logo={logo} color="white" />
      {/* Hero Section */}
      <div className="relative h-[333px] bg-gradient-to-r from-secondary to-primary">
        <div className="absolute lg:top-[12rem] xl:top-[15rem] left-0 right-0 px-4 md:px-8 lg:px-16 reveal">
          <h1 className="font-poppins font-semibold text-3xl xl:text-4xl lg:text-3xl text-white mb-4">
            Contact Us
          </h1>
        </div>
        {/* Right Aligned Image */}
        <div className="absolute top-1/2 right-16 transform -translate-y-1/2 reveal">
          <img src={contactImage1} alt="Contact Graphic" className="w-72 xl:w-80" />
        </div>
      </div>

      {/* Contact Information */}
      <div className="ml-16 mt-8 reveal">
        <h1 className="font-poppins text-gray_text mb-4 font-semibold xl:text-3xl lg:text-xl">
          Contact Information
        </h1>
      </div>

      {/* Mumbai Office Information */}
      <div className="ml-16 reveal">
        <h1 className="font-poppins">Mumbai Information</h1>
        <div className="flex gap-10 ml-16 lg:mb-[2rem] xl:mb-[0.5rem]">
          <div className="py-10">
            <div className="ml-9">
              <img src={contactImage4} alt="Phone Icon" />
            </div>
            <p>123-456-6578</p>
          </div>
          <div className="py-10">
            <div className="ml-14 mb-1">
              <img src={contactImage3} alt="Email Icon" />
            </div>
            <p>info@dataweaver.in</p>
          </div>
          <div className="py-10">
            <div className="ml-7">
              <img src={contactImage2} alt="Location Icon" />
            </div>
            <p>Mumbai, IN</p>
          </div>
        </div>
      </div>

      {/* Poland Office Information */}
      <div className="ml-16 reveal">
        <h1 className="font-poppins">Poland Information</h1>
        <div className="flex gap-10 ml-16 lg:mb-[8rem] xl:mb-[12rem]">
          <div className="py-10">
            <div className="ml-9">
              <img src={contactImage4} alt="Phone Icon" />
            </div>
            <p>+48 579133241</p>
          </div>
          <div className="py-10">
            <div className="ml-14 mb-1">
              <img src={contactImage3} alt="Email Icon" />
            </div>
            <p>maitrayeedave@dataweaver.in</p>
          </div>
          <div className="py-10">
            <div className="ml-7">
              <img src={contactImage2} alt="Location Icon" />
            </div>
            <p>Wrocław, Poland</p>
          </div>
        </div>
      </div>

      {/* Contact Form and Location */}
      <div className="flex flex-wrap justify-between items-start mb-[10rem] reveal">
        {/* Form Section */}
        <div className="px-16 w-full lg:w-1/2">
          <ContactForm />
        </div>

        {/* Location Section */}
        <div className="w-full lg:w-1/2 px-16">
          <div className="mb-4 font-poppins font-semibold text-xl">
            <h1>Our Location</h1>
          </div>
          <div className="mb-4">
            <h3 className="font-poppins text-lg mb-2">Mumbai Office</h3>
            <iframe
              width="100%"
              height="200"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=500&amp;height=200&amp;hl=en&amp;q=167,%20Dr%20Annie%20Besant%20Rd,%20Worli%20Naka,%20Bhim%20Nagar,%20Mahalakshmi,%20Mumbai,%20Maharashtra%20400018,%20India+(Data%20Weaver%20LLP)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-poppins text-lg mb-2">Poland Office</h3>
            <iframe
              width="100%"
              height="200"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=500&amp;height=200&amp;hl=en&amp;q=BIA%C5%81OWIESKA,%20NR%20121,%20lok.%2035,%20Miejsc.%20Wroc%C5%82aw-%2054-234%20Dolnoslaskie,%20Poland+(Data%20Weaver%20LLP)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
          <div className="font-poppins font-semibold text-xl">
            <h1>Follow Us on</h1>
            <div className="mt-2">
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
      </div>
    </div>
  );
}

export default Contact;
