import actionTypes from "../actions/actionTypes";
import { cloneDeep } from "lodash";
let inital = {
  userLogin: null,
};
const reducer = (state = inital, action) => {
  switch (action.type) {
    case actionTypes.SET_USERLOGIN:
      state.userLogin = action.payload;
      return cloneDeep(state);
    default:
      return cloneDeep(state);
  }
};
export default reducer;
