import actionTypes from "./actionTypes";
import axiosClient from "../../axiosClient";
export const actLoginRequest = (loginbody) => {
  return async (dispatch) => {
    return await axiosClient.post("checkLogin", loginbody).then((res) => {
      dispatch(actSetUserLogin(res.data));
    });
  };
};
const actSetUserLogin = (userLogin) => ({
  type: actionTypes.SET_USERLOGIN,
  payload: userLogin,
});
