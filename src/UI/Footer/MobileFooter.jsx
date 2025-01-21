import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import horizontalBlueLogo from "../../assets/horizontal_blue_logo.png";

const MobileFooter = () => {
  return (
    <footer className="  bg-white p-6 font-sans">
      <div className="flex">
        <div className="mb-8 w-1/2 ">
          <div className="flex items-center mb-6">
            <div className="text-secondary text-2xl font-bold flex items-center gap-1 w-[10rem]">
              <img src={horizontalBlueLogo} />
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray_text">
            <div className="flex gap-2">
              <MapPin className="w-5 h-5 flex-shrink-0 text-gray_line" />
              <p>
                304, Readymoney Terrace, Dr. AB Nair Rd, Lotus Colony, Worli,
                Mumbai, Maharashtra 400018
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="w-5 h-5 text-gray_line" />
              <a
                href="mailto:abc@dataweaver.in"
                className="hover:text-purple-900"
              >
                abc@dataweaver.in
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="w-5 h-5 text-gray_line" />
              <a href="tel:02232901238" className="hover:text-secondary">
                02232901238
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 w-1/2 ml-10">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Services</h4>
              <ul className="space-y-2 text-gray_text">
                <li>Data Management</li>
                <li>ERP</li>
                <li>ZOHO</li>
              </ul>
            </div>
            <div className="space-y-2 font-medium ">
              <div>Products</div>
              <div>Team</div>
              <div>About</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between text-sm font-medium text-gray_text pt-4 border-t border-gray_line">
        <a href="#" className="hover:text-primary">
          site map
        </a>
        <a href="#" className="hover:text-primary">
          privacy policy
        </a>
        <a href="#" className="hover:text-primary">
          advance search
        </a>
        <a href="#" className="hover:text-primary">
          search terms
        </a>
      </div>
    </footer>
  );
};

export default MobileFooter;
