import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";

const App = () => {
  const location = useLocation();
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* <HeaderComponent /> */}
      {location.pathname !== "/show" && <Header />}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
