import { NavLink } from "react-router-dom";
import { classNames } from "../common/HelperFunctions";
import { REDXMAS_NAVIGATION } from "../../routers/router";

const Header = ({ hideHeaderMenu }) => {
  const navigateHandler = (page) => {
    // console.log(page);
  };
  return (
    // <div className="sticky top-0 h-16 bg-white">
    //   <div
    //     className={`${
    //       hideHeaderMenu == "true" ? "h-full" : "h-3/5"
    //     } flex justify-center`}
    //   >
    //     <img className="h-auto w-auto" src="redxmaslogo.png"></img>
    //     <img className="h-auto w-auto" src="Infititis-Logo.png"></img>
    //   </div>
    //   <div
    //     className={`flex justify-center border border-t-[#1a1a1a] ${
    //       hideHeaderMenu == "true" ? "hidden" : "block h-2/5"
    //     }`}
    //   >
    //     <h2 className="w-1/2 border border-r-[#1a1a1a] px-3 text-base font-bold leading-7 text-[#1a1a1a]">
    //       ΓΡΑΨΕ
    //     </h2>
    //     <h2 className="w-1/2 border px-3 text-base font-bold leading-7 text-[#1a1a1a] ">
    //       ΔΙΑΒΑΣΕ
    //     </h2>
    //   </div>
    // </div>
    <div className="bg-white">
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
            {/* <div className="flex flex-shrink-0 items-center">
              <img className="block h-10" src="Infititis-Logo.png" alt="InfititisLogo"/>
            </div> */}
          </div>
          <div className={`flex h-full justify-end`}>
            <div className="flex gap-2 p-2">
              {REDXMAS_NAVIGATION().map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => navigateHandler(item.name)}
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
