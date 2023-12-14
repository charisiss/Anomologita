import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function NewWrapper({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[url('/basic-bg.jpg')] bg-cover bg-center bg-no-repeat font-manrope">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <Header />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-col items-center rounded-md p-8">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}
