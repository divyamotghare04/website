import useDeviceType from "../../Hooks/useDeviceType";

import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

function Footer() {
  const { isMobile, isDesktop } = useDeviceType();

  // console.log(isMobile);
  return (
    <div>
      {isMobile && <MobileFooter />}
      {isDesktop && <DesktopFooter />}
    </div>
  );
}

export default Footer;
