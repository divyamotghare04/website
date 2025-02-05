import useDeviceType from "../../../../Hooks/useDeviceType";

import DesktopMarketing from "./DesktopMarketing";

import MobileMarketing from "./MobileMarketing";

function DataManagement() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileMarketing />}
      {isDesktop && <DesktopMarketing />}
    </div>
  );
}

export default DataManagement;
