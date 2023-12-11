import Footer from "./Footer";
import Header from "./Header";
import Snowfall from "react-snowfall";
import HeaderComponent from "./HeaderComponent";

// eslint-disable-next-line react/prop-types
export default function Wrapper({ hideHeaderMenu, fullWidth, children }) {
  const snowflake1 = document.createElement("img");
  snowflake1.src = "snowflake.png";

  const images = [snowflake1];
  return (
    <>
      {/* <Header hideHeaderMenu={hideHeaderMenu} /> */}
      {/* ADMIN MENU <div className="absolute bottom-0 left-0 z-30 flex flex-col bg-black p-5"> 
        <a className="text-white" href="/add">
          ADD
        </a>
        <a className="text-white" href="/show">
          SHOW
        </a>
        <a className="text-white" href="/display">
          DISPLAY
        </a>
        <a className="text-white" href="/admin">
          ADMIN
        </a>
      </div> */}
      <div className="bg-[url('/basic-bg.jpg')] bg-cover bg-center bg-no-repeat font-manrope">
        <div
          className="relative flex flex-col overflow-x-hidden bg-black/40 backdrop-blur-sm"
          style={{ height: `calc(100vh - 5.25rem)` }}
        >
          <div
            className="absolute h-full w-screen bg-transparent"
            // style={{ height: `calc(100vh - 5.25rem)` }}
          >
            <Snowfall
              color="white"
              style={{ background: "transparent" }}
              snowflakeCount={150}
              images={images}
              radius={[5, 15]}
            />
          </div>
          <div
            className={`z-10 mx-auto h-full w-full ${
              fullWidth ? "" : "max-w-7xl"
            } px-2 sm:px-6 lg:px-8`}
            // style={{ height: `calc(100vh - 5.25rem)` }}
          >
            {children}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
