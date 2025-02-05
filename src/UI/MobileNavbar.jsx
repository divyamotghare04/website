import { MenuItem } from "@headlessui/react";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";

function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
    setSubmenuOpen(null);
  };

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prevState) => (prevState === menu ? null : menu));
  };

  return (
    <div>
      <div className="text-white p-5 relative ">
        <GrMenu size={36} onClick={toggleMenu} className="cursor-pointer" />
        {menuOpen && (
          <div className="absolute bg-white shadow-xl rounded-lg shadow-inherit z-50 w-36">
            <ul className="text-gray_text">
              <li
                className="p-2 hover:bg-gray_line cursor-pointer relative"
                onClick={() => toggleSubmenu("products")}
              >
                Products
                {submenuOpen === "products" && (
                  <div className="absolute left-full top-0 bg-white shadow-xl rounded-lg shadow-inherit w-40">
                    <ul>
                      <a
                        href="/products/zoho-one"
                        className="block  px-2 py-1 text-gray_tex "
                      >
                        Zoho One
                      </a>
                    </ul>
                    <ul>
                      <a
                        href="/products/erp-next"
                        className="block  px-2 py-1 text-gray_tex"
                      >
                        ERP Next
                      </a>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="p-2 hover:bg-gray_line cursor-pointer relative"
                onClick={() => toggleSubmenu("services")}
              >
                Services
                {submenuOpen === "services" && (
                  <div className="absolute left-full top-0 bg-white shadow-xl rounded-lg shadow-inherit w-40">
                    <ul>
                      <a
                        href="/services/data-management"
                        className="block px-2 py-1  text-gray_text"
                      >
                        Data Management
                      </a>
                    </ul>
                    <ul>
                      <a
                        href="/services/erp-consultation"
                        className="block px-2 py-1  text-gray_text"
                      >
                        ERP Consultation
                      </a>
                    </ul>
                    <ul>
                      {" "}
                      <a
                        href="/services/zoho-customization"
                        className="block px-2 py-1  text-gray_text"
                      >
                        Zoho Customization
                      </a>
                    </ul>
                  </div>
                )}
              </li>
              <li className="p-2 hover:bg-gray_line cursor-pointer">
                <a href="/team">Team</a>
              </li>
              <li className="p-2 hover:bg-gray_line cursor-pointer">
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileNavbar;
