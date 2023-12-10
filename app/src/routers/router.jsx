import { createBrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import ErrorPage from "../pages/ErrorPage";
// import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import React from "react";
import ComingSoon from "../pages/ComingSoon";
import HomePage from "../pages/HomePage";
import AddNew from "../pages/AddNew";
import ShowPage from "../pages/ShowPage";
import DisplayPage from "../pages/DisplayPage";
import AdminPage from "../pages/AdminPage";
import App from "../App";
import CompletedAnomologitaPage from "../pages/CompletedAnomologitaPage";

const NAVIGATION = () => {
  const navigation = [
    // ...(isAuthenticated
    //   ? [
    { name: "Home", href: "/home" },
    { name: "Add", href: "/add" },
    { name: "Show", href: "/show" },
    { name: "Display", href: "/display" },
    { name: "Admin", href: "/admin" },
    //   ]
    // : [{ name: "Welcome", href: LANDING_ROUTE }]),
  ];

  return navigation;
};

export default NAVIGATION;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      /* Unguarded Routes */
      {
        path: "/",
        element: <ComingSoon />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/add",
        element: <AddNew />,
      },
      {
        path: "/show",
        element: <ShowPage />,
      },
      {
        path: "/display",
        element: <DisplayPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/test",
        element: <CompletedAnomologitaPage />,
      },
    ],
  },
]);
