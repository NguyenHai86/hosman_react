import React, { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./../SideBar/SideBar";
import { useDispatch } from "react-redux";
import "./ManagerMotel.scss";
import * as actions from "./../../store/actions";
export default function ManagerMotel() {
  const user = useSelector((state) => state.user);
  const khutro = useSelector((state) => state.khutro);
  let currenKhuTro = khutro ? khutro[0] : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!user.userLogin) navigate("/");
  });
  useEffect(() => {
    if (user.userLogin)
      dispatch(actions.actFetchKhuTroRequest(user.userLogin.maNguoiDung));
  }, []);
  return (
    <div className="page">
      <div className="page__sidebar">
        <SideBar currentKhuTro={currenKhuTro} userLogin={user.userLogin} />
      </div>
      <div className="page__container">
        <Outlet />
      </div>
    </div>
  );
}
