import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
export default function Wrapper({ children }) {
  return (
    <>
      <Header />
      <div className="bg-basic bg-no-repeat bg-cover bg-center font-manrope">
        <div className="backdrop-blur-sm bg-black/40 h-[87vh] w-screen flex flex-col overflow-hidden">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
