import React from "react";
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
    </>
  );
}
