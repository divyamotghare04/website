import useDeviceType from "../../../../Hooks/useDeviceType";
import DesktopZohoOne from "./DesktopZohoOne";

import MobileZohoOne from "./MobileZohoOne";

function index() {
  const { isMobile, isDesktop } = useDeviceType();

  return (
    <div>
      {isMobile && <MobileZohoOne />}
      {isDesktop && <DesktopZohoOne />}
    </div>
  );
}

export default index;
