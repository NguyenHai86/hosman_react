import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import logo from "./../assets/images/hosman_blue.svg";
import Login from "./SignLogin/Login";
import Sign from "./SignLogin/Sign";
import { PATH } from "../routers/path";
import ManagerMotel from "./ManagerMotel/ManagerMotel";
export default function App() {
  return (
    <>
      <div className="sign-login">
        <div className="sign-login__container">
          <Routes>
            <Route path={PATH.SIGNUP} element={<Sign />} />
            <Route path={PATH.LOGIN} element={<Login />} />
          </Routes>
        </div>
        <div className="sign-login__image">
          <div className="sign-login__icon">
            <img src={logo} alt="background"></img>
            <p>QUẢN LÝ NHÀ TRỌ CHUYÊN NGHIỆP</p>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}
