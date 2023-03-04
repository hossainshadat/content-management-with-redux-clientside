import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Main/error/ErrorPage";
import Home from "../pages/Main/home/Home";
import Main from "./../layout/main/Main";
import Cart from "./../pages/Main/cart/Cart";
import Dashboard from "./../layout/dashboard/Dashboard";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import DashboardProducts from "../pages/Dashboard/DashboardProducts/DashboardProducts";
import UpdateProduct from "./../pages/Dashboard/updateProducts/UpdateProduct";

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
        path: "/cart",
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
        element: <DashboardProducts />,
      },
      {
        path: "/addproducts",
        element: <AddProducts />,
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct />,
      },
    ],
  },
]);
