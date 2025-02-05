import useDeviceType from "../../../Hooks/useDeviceType";

import DesktopZohoCustomization from "./DesktopZohoCustomization";

import MobileZohoCustomization from "./MobileZohoCustomization";

function ErpConsultation() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileZohoCustomization />}
      {isDesktop && <DesktopZohoCustomization />}
    </div>
  );
}

export default ErpConsultation;
