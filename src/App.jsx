import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./UI/AppLayout";

// import Services from "./pages/Services/Services";
import Contact from "./pages/Contact";
// import Products from "./pages/Products";
import Team from "./pages/Teams";
import ZohoCustomization from "./pages/Services/ZohoCustomization";
import DataManagement from "./pages/Services/DataManagement";
import ErpConsultation from "./pages/Services/ErpConsultation";
import ZohoOne from "./pages/Products/ZohoOne/ZohoOnePage";
import BiAnalytics from "./pages/Products/ZohoOne/BiAnalytics";
import Hr from "./pages/Products/ZohoOne/HR";
import Marketing from "./pages/Products/ZohoOne/Marketing";
import Finance from "./pages/Products/ZohoOne/Finance";
import Sales from "./pages/Products/ZohoOne/Sales";
import ErpNext from "./pages/Products/ErpNext";
import ScrollToTop from "./UI/ScrollToTop";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/Services" element={<Services />} /> */}
          <Route
            path="/services/zoho-customization"
            element={<ZohoCustomization />}
          />
          <Route
            path="/services/data-management"
            element={<DataManagement />}
          />
          <Route
            path="/services/erp-consultation"
            element={<ErpConsultation />}
          />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products/zoho-one" element={<ZohoOne />} />

          <Route path="/products/zoho-one/finance" element={<Finance />} />
          <Route path="/products/zoho-one/sales" element={<Sales />} />
          <Route path="/products/zoho-one/hr" element={<Hr />} />
          <Route path="/products/zoho-one/marketing" element={<Marketing />} />
          <Route
            path="/products/zoho-one/bi-analytics"
            element={<BiAnalytics />}
          />
          <Route path="/products/erp-next" element={<ErpNext />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
