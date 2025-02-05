import useDeviceType from "../../../Hooks/useDeviceType";
import DesktopErpNext from "./DesktopErpNext";

import MobileErpNext from "./MobileErpNext";

function ErpNext() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileErpNext />}
      {isDesktop && <DesktopErpNext />}
    </div>
  );
}

export default ErpNext;
