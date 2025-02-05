import useDeviceType from "../../../Hooks/useDeviceType";
import DesktopErpConsultation from "./DesktopErpConsultation";

import MobileErpConsultation from "./MobileErpConsultation";

function ErpConsultation() {
  const { isMobile, isDesktop } = useDeviceType();
  return (
    <div>
      {isMobile && <MobileErpConsultation />}
      {isDesktop && <DesktopErpConsultation />}
    </div>
  );
}

export default ErpConsultation;
