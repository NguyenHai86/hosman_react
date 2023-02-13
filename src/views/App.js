import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { Outlet } from "react-router-dom";
import logo from "./../assets/images/hosman_blue.svg";

export default function App() {
  return (
    <>
      <div className="sign-login">
        <div className="sign-login__container">
          <Outlet />
        </div>
        <div className="sign-login__image">
          <div className="sign-login__icon">
            <img src={logo} alt="background"></img>
            <p>QUẢN LÝ NHÀ TRỌ CHUYÊN NGHIỆP</p>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
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
