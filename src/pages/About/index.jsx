import useDeviceType from "../../Hooks/useDeviceType";
import DesktopAbout from "./DesktopAbout";

import MobileAbout from "./MobileAbout";

function About() {
  const { isMobile, isDesktop } = useDeviceType();

  return (
    <div>
      {isMobile && <MobileAbout />}
      {isDesktop && <DesktopAbout />}
    </div>
  );
}

export default About;
