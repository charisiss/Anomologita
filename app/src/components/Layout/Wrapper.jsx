import Footer from "./Footer";
import Snowfall from "react-snowfall";
import { useLocation } from "react-router";

// eslint-disable-next-line react/prop-types
export default function Wrapper({ fullWidth, fullHeight, children }) {
  const snowflake1 = document.createElement("img");
  snowflake1.src = "snowflake.png";

  const images = [snowflake1];
  return (
    <div className="bg-[url('/basic-bg.jpg')] bg-cover bg-center bg-no-repeat font-manrope">
      <div
        className="relative flex min-h-screen flex-col overflow-x-hidden bg-black/40 backdrop-blur-sm"
        style={{
          minHeight: `${
            location.pathname === "/show"
              ? "min-h-screen"
              : "calc(100vh - 4rem)"
          }`,
        }}
      >
        <div className="absolute h-full w-screen bg-transparent">
          <Snowfall
            color="white"
            style={{ background: "transparent" }}
            snowflakeCount={150}
            images={images}
            radius={[5, 15]}
          />
        </div>
        <div
          className={`z-10 mx-auto mb-20 h-full ${
            fullWidth ? "w-full" : "max-w-7xl"
          } ${fullHeight ? "h-screen" : "max-h-7xl"} px-2 pt-2 sm:px-6 lg:px-8`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
