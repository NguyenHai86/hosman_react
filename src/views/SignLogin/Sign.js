import "./Sign.scss";
import logoFacebook from "./../../assets/images/facebookIcon.svg";
import logoGoogle from "./../../assets/images/googleIcon.svg";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import * as actions from "./../../store/actions";
import { useDispatch } from "react-redux";
export default function Sign() {
  const [isShowPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      tennguoidung: "",
      soCCCD: "",
      soDienThoai: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      tennguoidung: Yup.string()
        .required("Không được để trống")
        .min(8, "Tên phải có ít nhất 8 ký tự"),
      soCCCD: Yup.string()
        .required("Không được để trống")
        .min(9, "Số CCCD ít nhất phải 9 số")
        .max(12, "Số CCCD phải ít hơn 11 số"),
      soDienThoai: Yup.string()
        .required("Không được để trống")
        .min(10, "Số điện thoại ít nhất phải 10 số")
        .max(11, "Số điện thoại phải ít hơn 12 số"),
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
    handleSubmit: (values) => {},
  });
  const handleSignup = () => {
    if (isEmpty(formik.errors)) {
      let user = {
        maNguoiDung: "s",
        tennguoidung: formik.values.tennguoidung,
        cccd: formik.values.soCCCD,
        soDienThoai: formik.values.soDienThoai,
        email: formik.values.email,
        matkhau: formik.values.password,
      };

      dispatch(actions.actSignUserRequest(user)).then((result) => {
        if (result === true) {
          toast.success("Đăng ký thành công");
          navigate("/");
        } else toast.error("Đăng ký không thành công");
      });
    } else toast.error("Đăng ký không thành công");
  };
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
          name="tennguoidung"
          variant="outlined"
          label="Họ tên người dùng"
          value={formik.values.tennguoidung}
          onChange={formik.handleChange}
          error={
            formik.touched.tennguoidung && Boolean(formik.errors.tennguoidung)
          }
          helperText={formik.touched.tennguoidung && formik.errors.tennguoidung}
          autoComplete="new-password"></TextField>
        <div className="flex">
          <TextField
            name="soCCCD"
            variant="outlined"
            label="Số CCCD"
            value={formik.values.soCCCD}
            onChange={formik.handleChange}
            error={formik.touched.soCCCD && Boolean(formik.errors.soCCCD)}
            helperText={formik.touched.soCCCD && formik.errors.soCCCD}
            autoComplete="new-password"></TextField>
          <TextField
            name="soDienThoai"
            variant="outlined"
            label="Số điện thoại"
            value={formik.values.soDienThoai}
            onChange={formik.handleChange}
            error={
              formik.touched.soDienThoai && Boolean(formik.errors.soDienThoai)
            }
            helperText={formik.touched.soDienThoai && formik.errors.soDienThoai}
            autoComplete="new-password"></TextField>
        </div>

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
        <Button
          className="sign__submit"
          variant="contained"
          type="submit"
          onClick={handleSignup}>
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
