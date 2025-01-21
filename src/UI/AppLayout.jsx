import { Outlet } from "react-router-dom";
import Footer from "./Footer";

// import DesktopFooter from "./Footer/DesktopFooter";


function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default AppLayout;
