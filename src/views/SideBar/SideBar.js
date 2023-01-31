import React from 'react';
import logo from './../../assets/images/hosman_blue.svg';
import catAvatar from './../../assets/images/catAvatar.jpg';
import './SideBar.scss';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../routers/path';
class SideBar extends React.Component {
    showZoneFunction = () => {
        let zoneFunction = [
            {
                icon: 'fa-sharp fa-solid fa-door-open',
                name: 'Quản lý phòng',
                link: PATH.QLPHONG,
            },
            {
                icon: 'fa-duotone fa-users',
                name: 'Khách thuê',
                link: PATH.QLKHACHTHUE,
            },
            {
                icon: 'fa-solid fa-file-invoice-dollar',
                name: 'Tất cả hoá đơn',
                link: PATH.QLHOADDON,
            },
            {
                icon: 'fa-solid fa-cart-shopping',
                name: 'Phiếu chi',
                link: PATH.QLPHIEUCHI,
            },
            {
                icon: 'fa-solid fa-calendar',
                name: 'Lịch xem phòng',
                link: PATH.QLLICHXEMPHONG,
            },
            {
                icon: 'fa-solid fa-file-chart-pie',
                name: 'Báo cáo khu trọ',
                link: PATH.BAOCAOKHUTRO,
            },
            {
                icon: 'fa-solid fa-gear',
                name: 'Cài đặt khu trọ',
                link: PATH.CAIDATKHUTRO,
            },
        ];
        let result = zoneFunction.map((value, index) => {
            return (
                <NavLink key={index} className="zone-functions__item" to={value.link}>
                    <i className={value.icon}></i>
                    <span>{value.name}</span>
                </NavLink>
            );
        });
        return result;
    };
    showUserFunction = () => {
        let userFunction = [
            {
                icon: 'fa-solid fa-buildings',
                name: 'Quản lý khu',
                link: PATH.QLKHU,
            },
            {
                icon: 'fa-solid fa-file-chart-column',
                name: 'Tổng hợp báo cáo',
                link: PATH.TONGHOPBAOCAO,
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
    render() {
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
                    <i class="fa-regular fa-house"></i>
                    <div className="sidebar__manager__content">
                        <span>Đang quản lý khu</span>
                        <span>195 Nguyễn Văn Quá</span>
                    </div>
                </div>
                <div className="sidebar__function">
                    <div className="zone-functions">{this.showZoneFunction()}</div>
                    <div className="block-line">
                        <div className="block-line__line"></div>
                    </div>
                    <div className="user-functions">{this.showUserFunction()}</div>
                </div>

                <div className="sidebar__user">
                    <div className="block-line">
                        <div className="block-line__line"></div>
                    </div>
                    <div className="sidebar__user__content">
                        <img src={catAvatar} alt="avatar"></img>
                        <span>Nguyễn Duy Hải</span>
                        <button className="sidebar__button__logout">
                            <i className="fa-solid fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default SideBar;
