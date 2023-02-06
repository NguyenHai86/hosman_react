import React from "react";
import "./Login.scss";
import logoFacebook from "./../../assets/images/facebookIcon.svg";
import logoGoogle from "./../../assets/images/googleIcon.svg";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { PATH } from "../../routers/path";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as emailValidator from "email-validator";
class Login extends React.Component {
  state = {
    isShowPass: false,
    loginBody: {
      email: "",
      matkhau: "",
    },
  };
  handleChangeEmail = (event) => {
    let cloneLoginBody = { ...this.state.loginBody };
    cloneLoginBody.email = event.target.value;
    this.setState({
      loginBody: cloneLoginBody,
    });
  };
  handleChangePass = (event) => {
    let cloneLoginBody = { ...this.state.loginBody };
    cloneLoginBody.matkhau = event.target.value;
    this.setState({
      loginBody: cloneLoginBody,
    });
  };
  handleShowHidePass = () => {
    this.setState({
      isShowPass: !this.state.isShowPass,
    });
  };
  handleValidation = () => {
    let loginBody = this.state.loginBody;
    let errors = [];
    if (loginBody.email.trim()) {
      if (!emailValidator.validate(loginBody.email))
        errors.push("Email không đúng định dạng");
    } else {
      errors.push("Email không được để trông");
    }

    if (loginBody.matkhau.trim()) {
      if (loginBody.matkhau.length < 8)
        errors.push("Mật khẩu phải có ít nhất 8 ký tự");
    } else {
      errors.push("Mật khẩu không được để trống");
    }

    return errors.join(". ");
  };
  handleLogin = () => {
    let strError = this.handleValidation();
    if (strError) {
      toast.error(strError);
      return;
    } else {
      if (this.props.login(this.state.loginBody)) {
        toast.success("Đăng nhập thành công");
      }
    }
  };
  render() {
    return (
      <div className="login">
        <h1 className="login__title">ĐĂNG NHẬP</h1>
        <div className="login__grouplogin">
          <Button variant="outlined" color="tertiary">
            <img src={logoFacebook} alt="logo Facebook" />
            <span>Đăng nhập với Facebook</span>
          </Button>
          <Button variant="outlined" color="tertiary">
            <img src={logoGoogle} alt="logo Google" />
            <span>Đăng nhập với Google</span>
          </Button>
        </div>
        <p className="login__text-or">HOẶC</p>
        <form className="login__form">
          <TextField
            fullWidth
            id="email"
            name="email"
            variant="outlined"
            label="Email"
            value={this.state.loginBody.email}
            onChange={(event) => this.handleChangeEmail(event)}></TextField>
          <div className="login__inputpass">
            <TextField
              fullWidth
              id="password"
              name="password"
              variant="outlined"
              label="Password"
              type={this.state.isShowPass ? "text" : "password"}
              value={this.state.loginBody.matkhau}
              onChange={(event) => this.handleChangePass(event)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => this.handleShowHidePass()}>
                      {this.state.isShowPass ? (
                        <i className="fa-regular fa-eye-slash"></i>
                      ) : (
                        <i className="fa-regular fa-eye"></i>
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}></TextField>
          </div>
          <Button
            className="login__submit"
            variant="contained"
            onClick={() => this.handleLogin()}>
            ĐĂNG NHẬP
          </Button>
        </form>
        <div className="login__grouplink">
          <span>Bạn chưa có tài khoản ?</span>
          <Link to={PATH.SIGNUP}>Đăng ký</Link>
          <Link to="#">Quên mật khẩu</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    login: (loginbody) => {
      dispatch(actions.actLoginRequest(loginbody));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
