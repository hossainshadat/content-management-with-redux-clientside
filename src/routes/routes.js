import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Main/error/ErrorPage";
import Home from "../pages/Main/home/Home";
import Main from "./../layout/main/Main";

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
    ],
  },
]);
