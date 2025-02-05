import useDeviceType from "../../Hooks/useDeviceType";
import DesktopContact from "./DesktopContact";
import MobileContact from "./MobileContact";

function Contact() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileContact />}
      {isDesktop && <DesktopContact />}
    </div>
  );
}

export default Contact;
