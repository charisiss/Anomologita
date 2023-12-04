import { Fragment } from "react";
import NAVIGATION from "../../routers/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  // BellIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  // Link,
  NavLink,
} from "react-router-dom";
import { classNames } from "../common/HelperFunctions";
// import DeloiiteLogo from "../assets/deloitte_logo.svg";

// import { useDispatch } from "react-redux";
// import { navigationActions } from "../../store/globalStore";
// import { classNames } from "../common/HelperFunctions";

// import { SignOutProfile } from "./SignOutProfile";
// import { SignInProfile } from "./SignInProfile";
// import { useIsAuthenticated } from "@azure/msal-react";

const HeaderComponent = () => {
  // const dispatch = useDispatch();
  // const { setNavigationFy, setNavigationFyFramework } = navigationActions;

  const navigateHandler = (page) => {
    console.log(page);
    // if (page === "Financial Year") {
    //   dispatch(setNavigationFy(1));
    //   dispatch(setNavigationFyFramework(0));
    // }
  };

  // const isAuthenticated = useIsAuthenticated();
  return (
    <Disclosure as="nav" className="relative z-10 bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={"Infititis-Logo.png"}
                    alt="Infititis-Logo"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src={"Infititis-Logo.png"}
                    alt="Infititis-Logo"
                  />
                </div>
                <div className="hidden md:ml-6 md:block self-center">
                  <div className="flex space-x-4 ">
                    {NAVIGATION().map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={() => navigateHandler(item.name)}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-red text-white hover:bg-redHover"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "flex items-center rounded-md px-3 py-2 text-center text-base font-medium"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                {/* Profile dropdown */}

                <img
                  className="block h-12 w-auto lg:hidden"
                  src={"redxmaslogo.png"}
                  alt="redxmaslogo"
                />
                <img
                  className="hidden h-12 w-auto lg:block"
                  src={"redxmaslogo.png"}
                  alt="redxmaslogo"
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NAVIGATION().map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => navigateHandler(item.name)}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-red text-white hover:bg-redHover"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "flex items-center rounded-md px-3 py-2 text-center text-base font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default HeaderComponent;
