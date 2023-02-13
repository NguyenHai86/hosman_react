import App from "./views/App";
import Sign from "./views/SignLogin/Sign";
import Login from "./views/SignLogin/Login";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";
import ManagerMotel from "./views/ManagerMotel/ManagerMotel";
import QuanLyPhong from "./views/QuanLyPhong/QuanLyPhong";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Sign",
        element: <Sign />,
      },
    ],
  },
  {
    path: "quanly",
    element: <ManagerMotel />,
    children: [
      {
        path: "quanlyphong",
        element: <QuanLyPhong />,
      },
    ],
  },
]);
