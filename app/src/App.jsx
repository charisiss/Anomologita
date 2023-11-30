import "./App.css";
import { Outlet } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AddNew from "./pages/AddNew";
// import ComingSoon from "./pages/ComingSoon";
// import Display from "./pages/DisplayPage";
// import AdminPage from "./pages/AdminPage";
// import ShowPage from "./pages/ShowPage";
import HeaderComponent from "./components/Layout/HeaderComponent";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ComingSoon />} />
    //     <Route path="/home" element={<HomePage />} />
    //     <Route path="/add" element={<AddNew />} />
    //     <Route path="/show" element={<ShowPage />} />
    //     <Route path="/display" element={<Display />} />
    //     <Route path="/admin" element={<AdminPage />} />
    //   </Routes>
    // </Router>

    <div className="relative h-full w-full">
      <HeaderComponent />
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
