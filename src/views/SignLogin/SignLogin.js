import React from 'react';
import './SignLogin.scss';
import logo from './../../assets/images/hosman_blue.svg';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routers/routesSignLogin';
class SignLogin extends React.Component {
    mapRoutes = () => {
        return routes.map((route, index) => {
            return <Route key={index} path={route.path} exact={route.exact} element={route.main} />;
        });
    };
    render() {
        return (
            <div className="sign-login">
                <div className="sign-login__container">
                    <Routes>{this.mapRoutes()}</Routes>
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
}
export default SignLogin;
