import App from "./views/App";
import Sign from "./views/SignLogin/Sign";
import Login from "./views/SignLogin/Login";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";
import ManagerMotel from "./views/ManagerMotel/ManagerMotel";
import QuanLyPhong from "./views/QuanLyPhong/QuanLyPhong";
import { createBrowserRouter } from "react-router-dom";
import QuanLyKhuTro from "./views/QuanLyKhuTro/QuanLyKhuTro";
import QuanLyHoaDon from "./views/QuanLyHoaDon/QuanLyHoaDon";
import QuanLyPhieuChi from "./views/QuanLyPhieuChi/QuanLyPhieuChi";
import QuanLyKhachThue from "./views/QuanLyKhachThue/QuanLyKhachThue";
import LichXemPhong from "./views/LichXemPhong/LichXemPhong";
import BaoCaoKhuTro from "./views/BaoCaoKhuTro/BaoCaoKhuTro";
import CaiDatKhuTro from "./views/CaiDatKhuTro/CaiDatKhuTro";
import TongHopBaoCao from "./views/TongHopBaoCao/TongHopBaoCao";
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
      {
        path: "quanlykhachthue",
        element: <QuanLyKhachThue />,
      },
      {
        path: "quanlyhoadon",
        element: <QuanLyHoaDon />,
      },
      {
        path: "quanlyphieuchi",
        element: <QuanLyPhieuChi />,
      },
      {
        path: "lichxemphong",
        element: <LichXemPhong />,
      },
      {
        path: "baocaokhutro",
        element: <BaoCaoKhuTro />,
      },
      {
        path: "quanlykhu",
        element: <QuanLyKhuTro />,
      },
      {
        path: "caidatkhutro",
        element: <CaiDatKhuTro />,
      },
      {
        path: "tonghopbaocao",
        element: <TongHopBaoCao />,
      },
    ],
  },
]);
