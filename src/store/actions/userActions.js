import actionTypes from "./actionTypes";
import axiosClient from "../../axiosClient";
export const actLoginRequest = (loginbody) => {
  console.log("Vao actLoginRequest");
  return async (dispatch) => {
    return await axiosClient.post("checkLogin", loginbody).then((res) => {
      console.log("Vao trong api");
      dispatch(actSetUserLogin(res.data));
    });
  };
};
const actSetUserLogin = (userLogin) => ({
  type: actionTypes.SET_USERLOGIN,
  payload: userLogin,
});
