import Navbar from "../../../UI/Navbar";

import animationData from "../../../../animation.json";
import horizontalLogo from "../../../assets/horizontal_blue_logo.png";
import Lottie from "lottie-react";
import { useEffect } from "react";
import { reveal } from "../../../utils/helper";

function DesktopErpNext() {
  useEffect(() => {
    reveal();

    window.addEventListener("scroll", reveal);

    return () => window.removeEventListener("scroll", reveal);
  }, []);
  return (
    <div>
      <Navbar logo={horizontalLogo} />
      <div className="flex flex-col items-center justify-center h-screen bg-white text-gray_text mt-[6rem]">
        <h1 className="text-4xl font-bold mb-4 reveal">
          Page Under Construction
        </h1>
        <p className="text-lg mb-6 reveal">
          We are working hard to bring this page to life!
        </p>

        <div className="w-1/3 reveal">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
}
export default DesktopErpNext;
