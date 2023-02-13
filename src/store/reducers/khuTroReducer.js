import actionTypes from "../actions/actionTypes";
// import { cloneDeep } from "lodash";

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_KHUTRO:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
export default reducer;
