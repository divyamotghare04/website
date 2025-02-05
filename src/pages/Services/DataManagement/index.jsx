import useDeviceType from "../../../Hooks/useDeviceType";

import DesktopDataManagement from "./DesktopDataManagement";

import MobileDataManagement from "./MobileDataManagement";

function DataManagement() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileDataManagement />}
      {isDesktop && <DesktopDataManagement />}
    </div>
  );
}

export default DataManagement;
