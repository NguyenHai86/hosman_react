import React from "react";
function app() {
  return (
    <form className="login__form">
      <TextField
        fullWidth
        id="email"
        name="email"
        variant="outlined"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}></TextField>
      <div className="login__inputpass">
        <TextField
          fullWidth
          id="password"
          name="password"
          variant="outlined"
          label="Password"
          type={isShowPass ? "text" : "password"}
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
  );
}
