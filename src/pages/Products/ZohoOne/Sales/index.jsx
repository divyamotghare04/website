import useDeviceType from "../../../../Hooks/useDeviceType";

import DesktopSales from "./DesktopSales";

import MobileSales from "./MobileSales";

function DataManagement() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileSales />}
      {isDesktop && <DesktopSales />}
    </div>
  );
}

export default DataManagement;
