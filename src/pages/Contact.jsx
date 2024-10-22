import { FaLinkedin } from "react-icons/fa";
import ContactForm from "../UI/ContactForm";
import Navbar from "../UI/Navbar";
import contactImage1 from "../assets/contactImage1.svg";
import contactImage2 from "../assets/contactImage2.png";
import contactImage3 from "../assets/contactImage3.png";
import contactImage4 from "../assets/contactImage4.png";
import contactImage5 from "../assets/contactImage5.png";

import logo from "../assets/horizontal_logo.png";

function Contact() {
  return (
    <div>
      <Navbar logo={logo} color="white" />
      <div className="relative h-[333px] bg-gradient-to-r from-secondary to-primary">
        <div className="absolute lg:top-[12rem] xl:top-[15rem] left-0 right-0 px-4 md:px-8 lg:px-16">
          <h1 className="font-poppins font-semibold text-3xl xl:text-4xl lg:text-3xl text-white mb-4">
            Contact Us
          </h1>
          {/* <p className="font-avenir text-xl md:text-xl lg:text-base text-white max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt
          </p> */}
        </div>
        <div className="absolute xl:ml-[57rem] xl:mt-[9.8rem] lg:mt-[12.45rem] lg:ml-[34.3rem] lg:mr-[50px]">
          <img src={contactImage1} />
        </div>
      </div>
      <div className="ml-16">
        <h1 className="font-poppins text-gray_text font-semibold xl:text-3xl lg:text-xl mt-[8rem]">
          Contact Information
        </h1>
        {/* <p className="font-avenir xl:text-lg lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt
        </p> */}
      </div>
      <div className="flex gap-10 ml-16 lg:mb-[8rem] xl:mb-[12rem]">
        <div className="py-10">
          <div className="ml-9">
            <img src={contactImage4} />
          </div>
          <p>123-456-6578</p>
        </div>
        <div className="py-10">
          <div className="ml-14 mb-1">
            <img src={contactImage3} />
          </div>
          <p>info@dataweaver.in</p>
        </div>
        <div className="py-10">
          <div className="ml-7">
            <img src={contactImage2} />
          </div>
          <p>Mumbai, IN</p>
        </div>
      </div>
      <div className="flex mb-[10rem]">
        <div className="px-16">
          <ContactForm />
        </div>
        <div>
          <div className="mb-4 xl:ml-[24.5rem] lg:ml-[2rem] font-poppins font-semibold text-xl">
            <h1>Our Location</h1>
          </div>
          <div className=" xl:ml-[24.5rem] lg:ml-[2rem] mb-4">
            <h3 className="font-poppins text-lg mb-2">Mumbai Office</h3>
            <iframe
              width="500"
              height="200"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=500&amp;height=200&amp;hl=en&amp;q=167,%20Dr%20Annie%20Besant%20Rd,%20Worli%20Naka,%20Bhim%20Nagar,%20Mahalakshmi,%20Mumbai,%20Maharashtra%20400018,%20India+(Data%20Weaver%20LLP)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
          <div className=" xl:ml-[24.5rem] lg:ml-[2rem] mb-4">
            <h3 className="font-poppins text-lg mb-2">Poland Office</h3>

            <iframe
              width="500"
              height="200"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=500&amp;height=200&amp;hl=en&amp;q=BIA%C5%81OWIESKA,%20NR%20121,%20lok.%2035,%20Miejsc.%20Wroc%C5%82aw-%2054-234%20Dolnoslaskie,%20Poland+(Data%20Weaver%20LLP)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className="xl:ml-[24.5rem] lg:ml-[2rem] font-poppins font-semibold text-xl">
            <h1>Follow Us on</h1>
            <div className="size-12 mt-2">
              <a
                href="https://www.linkedin.com/company/data-weaver-llp/"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition duration-300"
              >
                <img src={contactImage5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
