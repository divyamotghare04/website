import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./UI/AppLayout";
import About from "./pages/About";
// import Services from "./pages/Services/Services";
import Contact from "./pages/Contact";
// import Products from "./pages/Products";
import Team from "./pages/Team";
import ZohoCustomization from "./pages/Services/ZohoCustomization";
import DataManagement from "./pages/Services/DataManagement";
import ErpConsultation from "./pages/Services/ErpConsultation";
import ZohoOne from "./pages/Products/ZohoOne/ZohoOne";
import BiAnalytics from "./pages/Products/ZohoOne/BiAnalytics";
import Hr from "./pages/Products/ZohoOne/Hr.";
import Marketing from "./pages/Products/ZohoOne/Marketing";
import Finance from "./pages/Products/ZohoOne/Finance";
import Sales from "./pages/Products/ZohoOne/Sales";

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/products/erp-next" />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
