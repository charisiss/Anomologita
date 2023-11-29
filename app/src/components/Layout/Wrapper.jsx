import Footer from "./Footer";
import Header from "./Header";
import Snowfall from "react-snowfall";

// eslint-disable-next-line react/prop-types
export default function Wrapper({ children }) {
  const snowflake1 = document.createElement("img");
  snowflake1.src = "snowflake.png";

  const images = [snowflake1];
  return (
    <>
      <Header />
      <div className="bg-basic bg-no-repeat bg-cover bg-center font-manrope">
        <div className="backdrop-blur-sm bg-black/40 h-[87vh] w-screen flex flex-col overflow-hidden relative">
          <div className="bg-transparent absolute w-screen h-screen">
            <Snowfall
              color="white"
              style={{ background: "transparent" }}
              snowflakeCount={150}
              images={images}
              radius={[5, 15]}
            />
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
