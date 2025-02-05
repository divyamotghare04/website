import useDeviceType from "../../Hooks/useDeviceType";
import DesktopTeam from "./DesktopTeam";
import MobileTeam from "./MobileTeam";

function Team() {
  const { isMobile, isDesktop } = useDeviceType();

  return (
    <div>
      {isMobile && <MobileTeam />}
      {isDesktop && <DesktopTeam />}
    </div>
  );
}

export default Team;
