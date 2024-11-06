import { Link } from "react-router-dom";
import footerImage from "../assets/footerImage.png";
import ArrowButton from "./ArrowButton";

function FooterTop({ content }) {
  return (
    <div className=" relative">
      <img src={footerImage} className=" object-fill w-full h-full" />
      <div className=" absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h2 className="xl:text-5xl lg:text-3xl font-semibold font-poppins mb-4 shadow-text">
          Let's Get Started?
        </h2>
        <p className="w-[517px] font-avenir xl:text-xl mb-5">{content}</p>
        <Link to="/contact">
          <ArrowButton textColor="black" color="white" content="Contact Us" />
        </Link>
      </div>
    </div>
  );
}

export default FooterTop;
