import { Link } from "react-router-dom";
import mobileTopFooter from "../assets/mobileTopFooter.png";
import ArrowButton from "./ArrowButton";

function MobileFooterTop({ content }) {
  return (
    <div className="relative h-80">
      <img
        src={mobileTopFooter}
        alt="Background"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
        <h2 className="font-bold text-xl mb-2">Let's Get Started?</h2>
        <p className="text-sm mb-4">{content}</p>
        <Link to="/contact">
          <ArrowButton content="Contact Us" textColor="green" color="white" />
        </Link>
      </div>
    </div>
  );
}

export default MobileFooterTop;
