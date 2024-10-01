import { Outlet } from "react-router-dom";

import Footer from "./Footer";

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
