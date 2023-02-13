import actionTypes from "./actionTypes";
import axiosClient from "../../axiosClient";
export const actFetchPhongTroRequest = (maKhuTro) => {
  return async (dispatch) => {
    return await axiosClient
      .get(`api/KhuTro/ChuTro/${maKhuTro}`)
      .then((res) => {
        dispatch(actFetchPhongTro(res.data));
        return true;
      });
  };
};
const actFetchPhongTro = (listPhongTro) => ({
  type: actionTypes.FETCH_PHONGTRO,
  payload: listPhongTro,
});
