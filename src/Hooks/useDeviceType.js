import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileMatch =
      /android|iphone|ipad|mobile|blackberry|webos|opera mini|windows phone/i.test(
        userAgent
      );

    const isSmallScreen = window.innerWidth <= 768; // Adjust this threshold based on your requirements.
    setIsMobile(mobileMatch || isSmallScreen);

    const handleResize = () => {
      setIsMobile(mobileMatch || window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isDesktop: !isMobile };
};

export default useDeviceType;
