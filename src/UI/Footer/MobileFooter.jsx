import React, { useState } from "react";
import { MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import horizontalBlueLogo from "../../assets/horizontal_blue_logo.png";

const MobileFooter = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <footer className="bg-white p-6 font-sans">
      <div className="flex">
        <div className="mb-8 w-1/2">
          <div className="flex items-center mb-6">
            <div className="text-secondary text-2xl font-bold flex items-center gap-1 w-[10rem]">
              <img src={horizontalBlueLogo} alt="Company Logo" loading="lazy" />
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray_text">
            <div className="flex gap-2">
              <MapPin className="w-5 h-5 flex-shrink-0 text-gray_line" />
              <p>Worli, Mumbai, IN</p>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="w-5 h-5 text-gray_line" />
              <a
                href="mailto:info@dataweaver.in"
                className="hover:text-purple-900"
              >
                info@dataweaver.in
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="w-5 h-5 text-gray_line" />
              <a href="tel:9702702480" className="hover:text-secondary">
                +91-9702702480
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 w-1/2 ml-10">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-4 text-sm">
            <div>
              <button
                onClick={() => toggleExpand("services")}
                className="flex justify-between  font-medium  focus:outline-none"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform ml-4 ${
                    expanded === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expanded === "services" && (
                <ul className="space-y-2 text-gray_text ml-4">
                  <ul>
                    <a
                      href="/services/data-management"
                      className="block    text-gray_text"
                    >
                      Data Management
                    </a>
                  </ul>
                  <ul>
                    <a
                      href="/services/erp-consultation"
                      className="block   text-gray_text"
                    >
                      ERP Consultation
                    </a>
                  </ul>
                  <ul>
                    <a
                      href="/services/zoho-customization"
                      className="block  text-gray_text"
                    >
                      Zoho Customization
                    </a>
                  </ul>
                </ul>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleExpand("products")}
                className="flex justify-between font-medium  focus:outline-none"
              >
                Products
                <ChevronDown
                  className={`w-5 h-5 transition-transform ml-2 ${
                    expanded === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expanded === "products" && (
                <ul className="space-y-2 text-gray_text ml-4">
                  <ul>
                    <a
                      href="/products/zoho-one"
                      className="block  text-gray_text "
                    >
                      Zoho One
                    </a>
                  </ul>
                  <ul>
                    <a
                      href="/products/erp-next"
                      className="block  text-gray_text"
                    >
                      ERP Next
                    </a>
                  </ul>
                </ul>
              )}
            </div>

            <div className="space-y-2 font-medium">
              <div>
                <a href="/team">Team</a>
              </div>
              <div>
                <a href="/about">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
