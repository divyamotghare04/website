import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useLocation, Link } from "react-router-dom";

const navigation = [
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar({ logo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const location = useLocation();
  const isServicesRoute = location.pathname.startsWith("/services");
  const isProductsRoute = location.pathname.startsWith("/products");

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8 "
        >
          <div className="flex lg:flex-1 ml-6 relative">
            <a href="/" className=" p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-[42px] w-auto " />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mx-10 hidden lg:flex  lg:gap-x-16">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton
                  className={`inline-flex w-full justify-center text-xl font-medium font-poppins leading-6 text-black ${
                    isServicesRoute
                      ? "underline decoration-green decoration-2"
                      : ""
                  }`}
                  v
                >
                  Services
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-4 px-2">
                  <MenuItem>
                    <a
                      href="/services/data-management"
                      className="block px-4 py-2  text-black font-avenir text-lg"
                    >
                      Data Management
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/services/erp-consultation"
                      className="block px-4 py-2  text-black font-avenir text-lg"
                    >
                      ERP Consultation
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/services/zoho-customization"
                      className="block px-4 py-2  text-black font-avenir text-lg"
                    >
                      Zoho Customization
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton
                  className={`inline-flex w-full justify-center text-xl font-medium font-poppins leading-6 text-black ${
                    isProductsRoute
                      ? "underline decoration-green decoration-4"
                      : ""
                  }`}
                >
                  Products
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-4 px-2">
                  <MenuItem>
                    <a
                      href="/products/zoho-one"
                      className="block px-4 py-2  text-black font-avenir text-lg"
                    >
                      Zoho One
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/products/erp-next"
                      className="block px-4 py-2  text-black font-avenir text-lg"
                    >
                      ERP Next
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xl font-medium font-poppins leading-6 text-black ${
                  isActive(item.href)
                    ? " underline decoration-green decoration-2"
                    : ""
                } `}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className=" fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className=" flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
