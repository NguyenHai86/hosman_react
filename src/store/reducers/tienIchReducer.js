import { cloneDeep } from "lodash";
import actionTypes from "../actions/actionTypes";
const initialState = { tienIch: [], tienich_khutro: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TIENICH_KHUTRO:
      state.tienich_khutro = action.payload;
      return cloneDeep(state);
    default:
      return cloneDeep(state);
  }
};
export default reducer;
