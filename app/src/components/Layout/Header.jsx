import { NavLink } from "react-router-dom";
import { classNames } from "../common/HelperFunctions";
import { REDXMAS_NAVIGATION } from "../../routers/router";

const Header = () => {
  return (
    <div className="z-20 w-full bg-white">
      <div className="mx-auto h-16 max-w-7xl px-2">
        <div className={`flex h-full w-full justify-between`}>
          <div className="flex gap-2 max-lg:w-full max-lg:justify-center">
            <NavLink
              className="flex flex-shrink-0 items-center text-2xl font-bold text-red  max-lg:text-center"
              to={"/home"}
            >
              FOR THE FESTIVALS
              {/* <img
                className="block h-16"
                src="redxmaslogo.png"
                alt="redxmaslogo"
              /> */}
            </NavLink>
          </div>
          <div className={`flex h-full justify-end`}>
            <div className="flex flex-shrink-0 items-center gap-2 p-2 text-2xl font-bold text-red max-lg:hidden">
              INFITITIS.GR
              {/* REMOVED NAVLINKS ADDED TEXT */}
              {/* {REDXMAS_NAVIGATION().map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-red text-white hover:bg-redHover"
                        : "text-black hover:bg-gray-400 hover:text-white",
                      "flex items-center rounded-md px-3 py-2 text-center text-base font-medium",
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
