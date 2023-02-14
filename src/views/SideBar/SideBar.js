import logo from "./../../assets/images/hosman_blue.svg";
import catAvatar from "./../../assets/images/catAvatar.jpg";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { memo } from "react";
import { removeRefeshToken } from "../../Util/RefeshToken";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "./../../store/actions";
function SideBar(props) {
  let currentKhuTro = props.currentKhuTro;
  let userLogin = props.userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showZoneFunction = () => {
    let zoneFunction = [
      {
        icon: "fa-sharp fa-solid fa-door-open",
        name: "Quản lý phòng",
        link: "quanlyphong",
      },
      {
        icon: "fa-duotone fa-users",
        name: "Khách thuê",
        link: "quanlykhachthue",
      },
      {
        icon: "fa-solid fa-file-invoice-dollar",
        name: "Tất cả hoá đơn",
        link: "quanlyhoadon",
      },
      {
        icon: "fa-solid fa-cart-shopping",
        name: "Phiếu chi",
        link: "quanlyphieuchi",
      },
      {
        icon: "fa-solid fa-calendar",
        name: "Lịch xem phòng",
        link: "lichxemphong",
      },
      {
        icon: "fa-solid fa-file-chart-pie",
        name: "Báo cáo khu trọ",
        link: "baocaokhutro",
      },
      {
        icon: "fa-solid fa-gear",
        name: "Cài đặt khu trọ",
        link: "caidatkhutro",
      },
    ];
    let result = zoneFunction.map((value, index) => {
      return (
        <NavLink
          key={index}
          className={
            currentKhuTro
              ? "zone-functions__item"
              : "zone-functions__item disable"
          }
          to={value.link}>
          <i className={value.icon}></i>
          <span>{value.name}</span>
        </NavLink>
      );
    });
    return result;
  };
  const showUserFunction = () => {
    let userFunction = [
      {
        icon: "fa-solid fa-buildings",
        name: "Quản lý khu",
        link: "quanlykhu",
      },
      {
        icon: "fa-solid fa-file-chart-column",
        name: "Tổng hợp báo cáo",
        link: "tonghopbaocao",
      },
    ];
    let result = userFunction.map((value, index) => {
      return (
        <NavLink key={index} className="user-functions__item" to={value.link}>
          <i className={value.icon}></i>
          <span>{value.name}</span>
        </NavLink>
      );
    });
    return result;
  };
  const handleLogout = () => {
    let isConfirm = window.confirm("Bạn thật sự muốn đăng xuất?");
    if (isConfirm) {
      removeRefeshToken();
      dispatch(actions.actLogout);
      navigate("/");
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__logo">
          <img src={logo} alt="logo hosman"></img>
        </div>
        <button className="sidebar__hide">
          <i className="fa-solid fa-circle-arrow-left"></i>
        </button>
      </div>
      <div className="sidebar__manager">
        <i className="fa-regular fa-house"></i>
        <div className="sidebar__manager__content">
          <span>Đang quản lý khu</span>
          <span>{currentKhuTro != null ? currentKhuTro.tenKhu : "NULL"} </span>
        </div>
      </div>
      <div className="sidebar__function">
        <div className="zone-functions">{showZoneFunction()}</div>
        <div className="block-line">
          <div className="block-line__line"></div>
        </div>
        <div className="user-functions">{showUserFunction()}</div>
      </div>

      <div className="sidebar__user">
        <div className="block-line">
          <div className="block-line__line"></div>
        </div>
        <div className="sidebar__user__content">
          <img src={catAvatar} alt="avatar"></img>
          <span>{userLogin ? userLogin.tenNguoiDung : "NULL"}</span>
          <button className="sidebar__button__logout" onClick={handleLogout}>
            <i className="fa-solid fa-sign-out-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default memo(SideBar);
