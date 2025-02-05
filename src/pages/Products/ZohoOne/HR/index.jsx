import useDeviceType from "../../../../Hooks/useDeviceType";

import DesktopHr from "./DesktopHr.";

import MobileHr from "./MobileHr";

function DataManagement() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileHr />}
      {isDesktop && <DesktopHr />}
    </div>
  );
}

export default DataManagement;
