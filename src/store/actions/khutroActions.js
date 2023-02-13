import actionTypes from "./actionTypes";
import axiosClient from "../../axiosClient";
export const actFetchKhuTroRequest = (maKhuTro) => {
  return async (dispatch) => {
    return await axiosClient
      .get(`api/KhuTro/ChuTro/${maKhuTro}`)
      .then((res) => {
        dispatch(actFetchKhuTro(res.data));
        return true;
      });
  };
};
const actFetchKhuTro = (listKhuTro) => ({
  type: actionTypes.FETCH_KHUTRO,
  payload: listKhuTro,
});
