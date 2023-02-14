import { combineReducers } from "redux";
import userReducer from "./userReducer";
import khuTroReducer from "./khuTroReducer";
import actionTypes from "../actions/actionTypes";

const appReducer = combineReducers({
  user: userReducer,
  khuTro: khuTroReducer,
});

const reducer = (state, action) => {
  if (action.type === actionTypes.LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default reducer;
