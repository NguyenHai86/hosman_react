import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./../SideBar/SideBar";
import { useDispatch } from "react-redux";
import "./ManagerMotel.scss";
import * as actions from "./../../store/actions";
import { cloneDeep, isEmpty } from "lodash";
import { toast } from "react-toastify";
export default function ManagerMotel() {
  const userLogin = useSelector((state) => state.user.userLogin);
  const khuTro = useSelector((state) => state.khuTro);
  const [loading, setLoading] = useState(true);
  let [currentKhuTro, setCurrentKhuTro] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (isEmpty(userLogin)) navigate(".."); //Chuyen sang trang login
    else if (userLogin)
      dispatch(actions.actFetchKhuTroRequest(userLogin.maNguoiDung));
    setLoading(false);
  }, []);
  useEffect(() => {
    if (!loading) {
      if (khuTro.length > 0) {
        setCurrentKhuTro(khuTro[0]);
      }
    }
  }, [khuTro]);

  return (
    <div className="page">
      <div className="page__sidebar">
        <SideBar currentKhuTro={currentKhuTro} userLogin={userLogin} />
      </div>
      <div className="page__container">
        <Outlet />
      </div>
    </div>
  );
}
