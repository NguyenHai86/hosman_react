import React from "react";
import "./Sign.scss";
import logoFacebook from "./../../assets/images/facebookIcon.svg";
import logoGoogle from "./../../assets/images/googleIcon.svg";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import { PATH } from "../../routers/path";

class Sign extends React.Component {
  state = {
    isShowPass: false,
  };
  handleShowHidePass = () => {
    this.setState({
      isShowPass: !this.state.isShowPass,
    });
  };
  render() {
    return (
      <div className="sign">
        <h1 className="sign__title">ĐĂNG KÝ</h1>
        <div className="sign__groupsign">
          <Button variant="outlined" color="tertiary">
            <img src={logoFacebook} alt="logo Facebook" />
            <span>Đăng ký với Facebook</span>
          </Button>
          <Button variant="outlined" color="tertiary">
            <img src={logoGoogle} alt="logo Google" />
            <span>Đăng ký với Google</span>
          </Button>
        </div>
        <p className="sign__text-or">HOẶC</p>
        <form
          onSubmit={this.props.handleSubmit}
          className="sign__form"
          autoComplete="off">
          <TextField
            fullWidth
            name="email"
            variant="outlined"
            label="Email"
            value={this.props.values.email}
            onChange={this.props.handleChange}
            error={this.props.touched.email && Boolean(this.props.errors.email)}
            helperText={this.props.touched.email && this.props.errors.email}
            autoComplete="new-password"></TextField>

          <div className="sign__inputpass">
            <TextField
              fullWidth
              id="password"
              name="password"
              variant="outlined"
              label="Password"
              className="sign__inputpass__text"
              autoComplete="new-password"
              type={this.state.isShowPass ? "text" : "password"}
              value={this.props.values.password}
              onChange={this.props.handleChange}
              error={
                this.props.touched.password &&
                Boolean(this.props.errors.password)
              }
              helperText={
                this.props.touched.password && this.props.errors.password
              }
              InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => this.handleShowHidePass()}>
                      {this.state.isShowPass ? (
                        <i class="fa-regular fa-eye-slash"></i>
                      ) : (
                        <i class="fa-regular fa-eye"></i>
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}></TextField>
          </div>
          <div className="sign__inputpass">
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              variant="outlined"
              label="Confirm password"
              autoComplete="new-password"
              type={this.state.isShowPass ? "text" : "password"}
              value={this.props.values.confirmPassword}
              onChange={this.props.handleChange}
              error={
                this.props.touched.confirmPassword &&
                Boolean(this.props.errors.confirmPassword)
              }
              helperText={
                this.props.touched.confirmPassword &&
                this.props.errors.confirmPassword
              }
              InputProps={{
                // <-- This is where the toggle button is added.
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
          <Button className="sign__submit" variant="contained" type="submit">
            ĐĂNG KÝ
          </Button>
        </form>
        <div className="sign__grouplink">
          <span>Bạn đã có tài khoản ?</span>
          <Link to={PATH.LOGIN}>Đăng nhập</Link>
        </div>
      </div>
    );
  }
}
const formik = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Định dạng email không đúng")
      .required("Không được để trống"),
    password: Yup.string()
      .min(8, "Password phải có ít nhất 8 ký tự")
      .required("Không được để trống"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password không trùng nhau")
      .required("Không được để trống"),
  }),
  handleSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
})(Sign);
export default formik;
