import actionTypes from "./actionTypes";
import axiosClient from "../../axiosClient";
export const actLoginRequest = (loginbody) => {
  return async (dispatch) => {
    return await axiosClient.post("login", loginbody).then((res) => {
      dispatch(actSetUserLogin(res.data));
      return true;
    });
  };
};
export const actRefeshLogin = (reseshToken) => {
  return async (dispatch) => {
    return await axiosClient
      .post(`refeshtoken?refeshToken=${reseshToken}`)
      .then((res) => {
        dispatch(actSetUserLogin(res.data));
        return res.data.refeshToken;
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
export const actLogout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
