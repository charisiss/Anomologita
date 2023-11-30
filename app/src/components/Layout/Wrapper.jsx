import Footer from "./Footer";
import Header from "./Header";
import Snowfall from "react-snowfall";
import HeaderComponent from "./HeaderComponent";

// eslint-disable-next-line react/prop-types
export default function Wrapper({ hideHeaderMenu, children }) {
  const snowflake1 = document.createElement("img");
  snowflake1.src = "snowflake.png";

  const images = [snowflake1];
  return (
    <>
      {/* <Header hideHeaderMenu={hideHeaderMenu} /> */}
      {/* <HeaderComponent /> */}
      <div className="bg-[url('/basic-bg.jpg')] bg-no-repeat bg-cover bg-center font-manrope">
        <div className="backdrop-blur-sm bg-black/40 flex flex-col overflow-hidden relative">
          <div className="bg-transparent absolute w-screen h-screen">
            <Snowfall
              color="white"
              style={{ background: "transparent" }}
              snowflakeCount={150}
              images={images}
              radius={[5, 15]}
            />
          </div>
          <div className="z-10 overflow-auto ">{children}</div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
