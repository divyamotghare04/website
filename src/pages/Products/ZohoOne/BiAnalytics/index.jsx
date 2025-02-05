import DesktopBiAnalytics from "./DesktopBiAnalytics";

import MobileBiAnalytics from "./MobileBiAnalytics";
import useDeviceType from "../../../../Hooks/useDeviceType";

function DataManagement() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileBiAnalytics />}
      {isDesktop && <DesktopBiAnalytics />}
    </div>
  );
}

export default DataManagement;
