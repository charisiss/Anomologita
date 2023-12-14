import { NavLink } from "react-router-dom";
import { classNames } from "../common/HelperFunctions";
import { REDXMAS_NAVIGATION } from "../../routers/router";

const Header = () => {
  return (
    <div className="absolute left-0 top-0 z-20 w-full bg-white">
      <div className="mx-auto h-16 max-w-7xl px-2">
        <div className={`flex h-full w-full justify-between`}>
          <div className="flex gap-2">
            <NavLink className="flex flex-shrink-0 items-center" to={"/home"}>
              <img
                className="block h-16"
                src="redxmaslogo.png"
                alt="redxmaslogo"
              />
            </NavLink>
          </div>
          <div className={`flex h-full justify-end`}>
            <div className="flex gap-2 p-2">
              {REDXMAS_NAVIGATION().map((item) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
