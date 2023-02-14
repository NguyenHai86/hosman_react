import React, { useState } from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import logo from "./../assets/images/hosman_blue.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "./../store/actions";
import { getRefeshToken, saveRefeshToken } from "../Util/RefeshToken";
export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    dispatch(actions.actRefeshLogin(getRefeshToken())).then((refeshToken) => {
      if (refeshToken) {
        saveRefeshToken(refeshToken);
        navigate("/quanly");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {!loading ? (
        <div className="sign-login">
          <div className="sign-login__container">
            <Outlet />
          </div>
          <div className="sign-login__image">
            <div className="sign-login__icon">
              <img src={logo} alt="background"></img>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
