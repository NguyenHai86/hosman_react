import actionTypes from "./actionTypes";
import axiosClient from "../../axiosClient";
export const actLoginRequest = (loginbody) => {
  return async (dispatch) => {
    return await axiosClient
      .post("login", loginbody)
      .then((res) => {
        dispatch(actSetUserLogin(res.data));
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
export const actRefeshLogin = (reseshToken) => {
  return async (dispatch) => {
    return await axiosClient
      .post(`refeshtoken?refeshToken=${reseshToken}`)
      .then((res) => {
        console.log(res);
        dispatch(actSetUserLogin(res.data));
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
const actSetUserLogin = (userLogin) => ({
  type: actionTypes.SET_USERLOGIN,
  payload: userLogin,
});
