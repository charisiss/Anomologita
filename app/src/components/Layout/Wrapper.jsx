import Snowfall from "react-snowfall";

export default function Wrapper({ fullWidth, fullHeight, children }) {
  const snowflake1 = document.createElement("img");
  snowflake1.src = "snowflake.png";

  const images = [snowflake1];

  return (
    <div className="relative h-full">
      <div className="h-full bg-[url('/basic-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full bg-black/40 backdrop-blur-sm">
          <Snowfall
            color="white"
            style={{
              background: "transparent",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 10,
            }}
            snowflakeCount={80}
            images={images}
            radius={[15, 25]}
          />
        </div>
        <div className="absolute z-20 h-full w-full overflow-y-auto">
          <div
            className={` mx-auto ${
              fullWidth ? "w-full" : "max-w-7xl"
            } p-2 sm:px-6 lg:px-8`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
