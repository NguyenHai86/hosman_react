import actionTypes from "./actionTypes";
import axiosClient from "../../axiosClient";
export const actFetchHopDongRequest = (maKhuTro) => {
  return async (dispatch) => {
    return await axiosClient.get(`api/Phong/khutro/${maKhuTro}`).then((res) => {
      dispatch(actFetchPhongTro(res.data));
      return true;
    });
  };
};
const actFetchHopDong = (listPhongTro) => ({
  type: actionTypes.FETCH_PHONGTRO,
  payload: listPhongTro,
});
