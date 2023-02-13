import "./Sign.scss";
import logoFacebook from "./../../assets/images/facebookIcon.svg";
import logoGoogle from "./../../assets/images/googleIcon.svg";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
export default function Sign() {
  const [isShowPass, setShowPass] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
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
  });
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
        onSubmit={formik.handleSubmit}
        className="sign__form"
        autoComplete="off">
        <TextField
          fullWidth
          name="email"
          variant="outlined"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
            type={isShowPass ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPass(!isShowPass)}>
                    {isShowPass ? (
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
            type={isShowPass ? "text" : "password"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPass(!isShowPass)}>
                    {isShowPass ? (
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
        <Link to="/">Đăng nhập</Link>
      </div>
    </div>
  );
}
