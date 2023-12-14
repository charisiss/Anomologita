import Snowfall from "react-snowfall";
import { useLocation } from "react-router";

// eslint-disable-next-line react/prop-types
export default function Wrapper({ fullWidth, children }) {
  const snowflake1 = document.createElement("img");
  snowflake1.src = "snowflake.png";

  const images = [snowflake1];
  return (
    <div
      className="bg-[url('/basic-bg.jpg')] bg-cover bg-center bg-no-repeat font-manrope"
      style={{ height: `calc(100vh - 4rem)` }}
    >
      <div
        className="relative flex min-h-screen flex-col overflow-x-hidden bg-black/40 backdrop-blur-sm"
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <div
          className="absolute left-0 top-0 h-full w-screen bg-transparent"
          style={{ height: `calc(100vh - 4rem)` }}
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
          className={`z-10 mx-auto mb-20 ${
            fullWidth ? "w-full" : "max-w-7xl"
          } px-2 sm:px-6 lg:px-8`}
          style={{ height: `calc(100vh - 4rem)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
