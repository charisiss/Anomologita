import "./App.css";

import { Outlet, useLocation } from "react-router-dom";
import HeaderComponent from "./components/Layout/HeaderComponent";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AddNew from "./pages/AddNew";
// import ComingSoon from "./pages/ComingSoon";
// import Display from "./pages/DisplayPage";
// import AdminPage from "./pages/AdminPage";
// import ShowPage from "./pages/ShowPage";
// import CompletedAnomologitaPage from "./pages/CompletedAnomologitaPage";

const App = () => {
  const location = useLocation();
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ComingSoon />} />
    //     <Route path="/home" element={<HomePage />} />
    //     <Route path="/add" element={<AddNew />} />
    //     <Route path="/show" element={<ShowPage />} />
    //     <Route path="/display" element={<Display />} />
    //     <Route path="/admin" element={<AdminPage />} />
    //     <Route path="/test" element={<CompletedAnomologitaPage />} />
    //   </Routes>
    // </Router>

    <div className="relative flex min-h-screen w-full flex-col">
      {/* <HeaderComponent /> */}
      {location.pathname !== "/show" && <Header />}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
