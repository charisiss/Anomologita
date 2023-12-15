import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "../pages/ErrorPage";
// import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ComingSoon from "../pages/ComingPage/ComingSoon";
import HomePage from "../pages/HomePage/HomePage";
import AddNew from "../pages/WritePage/WritePage";
import ShowPage from "../pages/ShowPage/ShowPage";
import ReadPage from "../pages/ReadPage/ReadPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import App from "../App";

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

export const REDXMAS_NAVIGATION = () => {
  const navigation = [
    // ...(isAuthenticated
    //   ? [
    { name: "ΓΡΑΨΕ", href: "/write" },
    { name: "ΔΙΑΒΑΣΕ", href: "/read" },
    // { name: "Show", href: "/show" },
    // { name: "Display", href: "/display" },
    // { name: "Admin", href: "/admin" },
    //   ]
    // : [{ name: "Welcome", href: LANDING_ROUTE }]),
  ];

  return navigation;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      /* Unguarded Routes */
      {
        path: "/",
        element: <HomePage />,
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
        path: "/write",
        element: <AddNew />,
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
        path: "/read",
        element: <ReadPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);
