import React from "react";
import "./SignLogin.scss";
import logo from "./../../assets/images/hosman_blue.svg";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../routers/routesSignLogin";
import { withRouter } from "react-router";
import { PATH } from "../../routers/path";
class SignLogin extends React.Component {
  mapRoutes = () => {
    return routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  };
  componentDidMount() {
    if (window.location.pathname === "/") this.props.history.push(PATH.LOGIN);
  }
  render() {
    return (
      <div className="sign-login">
        <div className="sign-login__container">
          <Switch>{this.mapRoutes()}</Switch>
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
export default withRouter(SignLogin);
