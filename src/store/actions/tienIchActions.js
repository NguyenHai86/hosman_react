import actionTypes from "./actionTypes";
import axiosClient from "../../axiosClient";

export const actFetchTienIchKhuTroRequest = (maKhuTro) => {
  return async (dispatch) => {
    return await axiosClient
      .get(`api/TienIch/KhuTro/${maKhuTro}`)
      .then((res) => {
        dispatch(actFetchTienIchKhuTro(res.data));
        return true;
      });
  };
};
const actFetchTienIchKhuTro = (listTienIch) => {
  return {
    type: actionTypes.FETCH_TIENICH_KHUTRO,
    payload: listTienIch,
  };
};
