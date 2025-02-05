import useDeviceType from "../../../../Hooks/useDeviceType";

import DesktopFinance from "./DesktopFinance";

import MobileFinance from "./MobileFinance";

function DataManagement() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileFinance />}
      {isDesktop && <DesktopFinance />}
    </div>
  );
}

export default DataManagement;
