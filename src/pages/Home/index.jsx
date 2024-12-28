import useDeviceType from "../../Hooks/useDeviceType";
import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";

function index() {
  const { isMobile, isDesktop } = useDeviceType();

  return (
    <div>
      {isMobile && <MobileHome />}
      {isDesktop && <DesktopHome />}
    </div>
  );
}

export default index;
