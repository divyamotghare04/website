import footerImage from "../assets/footerImage.png";
import ArrowButton from "./ArrowButton";

function FooterTop({ content }) {
  return (
    <div className="w-[1519px] h-[406px] relative">
      <img src={footerImage} className=" object-fill w-[1519px] h-full" />
      <div className=" absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-5xl font-semibold font-poppins mb-4 shadow-text">
          Let's Get Started?
        </h2>
        <p className="w-[517px] font-avenir text-xl mb-5">{content}</p>

        <ArrowButton textColor="black" color="white" content="Contact Us" />
      </div>
    </div>
  );
}

export default FooterTop;
