import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNew from "./pages/AddNew";
import ComingSoon from "./pages/ComingSoon";
import Display from "./pages/DisplayPage";
import AdminPage from "./pages/AdminPage";
import ShowPage from "./pages/ShowPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/show" element={<ShowPage />} />
        <Route path="/display" element={<Display />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
