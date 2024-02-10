import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function Wrapper({ fullWidth, fullHeight, children }) {
  const snowflake1 = document.createElement("img");
  snowflake1.src = "paper-bin.png";

  const { width, height } = useWindowSize();

  return (
    <div className="relative h-full">
      <div className="h-full bg-[url('/basic-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="backdrop-blur-xs absolute inset-0 h-full bg-black/40">
          <Confetti width={width - 20} height={height - 80} />
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
