import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  // {/* <App /> */}
  <div className="flex" id="main-container">
    <RouterProvider router={router} />
  </div>
  // {/* </React.StrictMode> */}
);
