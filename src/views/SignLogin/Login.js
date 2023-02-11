import "./Login.scss";
import logoFacebook from "./../../assets/images/facebookIcon.svg";
import logoGoogle from "./../../assets/images/googleIcon.svg";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { json, Link } from "react-router-dom";
import { PATH } from "../../routers/path";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { getRefeshToken, saveRefeshToken } from "../../Util/RefeshToken";
export default function Login() {
  const [isShowPass, setShowPass] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Định dạng email không đúng")
        .required("Không được để trống"),
      password: Yup.string()
        .min(8, "Password phải có ít nhất 8 ký tự")
        .required("Không được để trống"),
    }),
    handleSubmit: (values) => {
      console.log("vao handle submit");
      alert(JSON.stringify(values, null, 2));
      handleLogin();
    },
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleLogin = () => {
    let loginBody = {
      email: formik.values.email,
      matkhau: formik.values.password,
    };

    dispatch(actions.actLoginRequest(loginBody)).then((result) => {
      if (result) {
        saveRefeshToken(user.userLogin.refeshToken);
        formik.resetForm();
        toast.success("Đăng nhập thành công");
      }
    });
  };
  useEffect(() => {
    dispatch(actions.actRefeshLogin(refeshToken));
  }, []);
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
      <form className="login__form" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          variant="outlined"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}></TextField>

        <div className="login__inputpass">
          <TextField
            fullWidth
            id="password"
            name="password"
            variant="outlined"
            label="Password"
            type={isShowPass ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPass((prev) => !prev)}>
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
          className="login__submit"
          variant="contained"
          type="submit"
          onClick={() => handleLogin()}>
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
