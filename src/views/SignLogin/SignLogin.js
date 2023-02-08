import React from "react";
import "./SignLogin.scss";
import logo from "./../../assets/images/hosman_blue.svg";
import { PATH } from "../../routers/path";
import Login from "./Login";
import Sign from "./Sign";
function SignLogin() {
  return (
    <div className="sign-login">
      <div className="sign-login__container">
        <Sign />
      </div>
      <div className="sign-login__image">
        <div className="sign-login__icon">
          <img src={logo} alt="background"></img>
          <p>QUẢN LÝ NHÀ TRỌ CHUYÊN NGHIỆP</p>
        </div>
      </div>
    </div>
  );
}
export default SignLogin;
