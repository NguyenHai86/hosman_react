import { cloneDeep } from "lodash";
import actionTypes from "../actions/actionTypes";

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOPDONG:
      state = action.payload;
      return cloneDeep(state);
    default:
      return cloneDeep(state);
  }
};
export default reducer;
