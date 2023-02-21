import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Main/error/ErrorPage";
import Home from "../pages/Main/home/Home";
import Main from "./../layout/main/Main";
import Cart from "./../pages/Main/cart/Cart";
import Dashboard from "./../layout/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
    ],
  },
]);
