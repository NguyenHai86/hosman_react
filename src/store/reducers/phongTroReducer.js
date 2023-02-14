import { cloneDeep } from "lodash";
import actionTypes from "../actions/actionTypes";
// import { cloneDeep } from "lodash";

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PHONGTRO:
      state = action.payload;
      return cloneDeep(state);
    default:
      return cloneDeep(state);
  }
};
export default reducer;
