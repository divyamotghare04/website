import Navbar from "../../UI/Navbar";

import animationData from "../../../animation.json";
import horizontalLogo from "../../assets/horizontal_blue_logo.png";
import Lottie from "lottie-react";

function ErpNext() {
  return (
    <div>
      <Navbar logo={horizontalLogo} />
      <div className="flex flex-col items-center justify-center h-screen bg-white text-gray_text mt-[6rem]">
        <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
        <p className="text-lg mb-6">
          We are working hard to bring this page to life!
        </p>

        <div className="w-1/3">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
}
export default ErpNext;
