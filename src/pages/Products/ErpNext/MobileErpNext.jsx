import Navbar from "../../../UI/Navbar";
import animationData from "../../../../animation.json";
import horizontalLogo from "../../../assets/horizontal_blue_logo.png";
import Lottie from "lottie-react";
import { useEffect } from "react";
import { reveal } from "../../../utils/helper";
import MobileNavbar from "../../../UI/MobileNavbar";
import mobileHomeBackground from "../../../assets/mobileHomeBackground.jpg";

function MobileErpNext() {
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
        <div className="flex flex-col items-center justify-center min-h-screen  text-gray_text  px-4 text-center">
          <h1 className="text-2xl font-bold mb-4 reveal text-white">
            Page Under Construction
          </h1>
          <p className="text-xl mb-6 reveal text-white">
            We are working hard to bring this page to life!
          </p>

          <div className="w-2/3 sm:w-1/2 md:w-1/3 reveal">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileErpNext;
