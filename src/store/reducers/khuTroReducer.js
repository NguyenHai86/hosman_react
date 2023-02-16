import { cloneDeep } from "lodash";
import actionTypes from "../actions/actionTypes";
// import { cloneDeep } from "lodash";
const initialState = { khuTro: [], currentKhuTro: {} };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_KHUTRO:
      state.khuTro = action.payload;
      return cloneDeep(state);
    case actionTypes.SET_CURRENT_KHUTRO:
      state.currentKhuTro = action.payload;
      return state;
    default:
      return cloneDeep(state);
  }
};
export default reducer;
