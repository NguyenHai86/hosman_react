import { combineReducers } from "redux";
import userReducer from "./userReducer";
import khuTroReducer from "./khuTroReducer";
import phongTroReducer from "./phongTroReducer";
import hopDongReducer from "./hopDongReducer";
import actionTypes from "../actions/actionTypes";

const appReducer = combineReducers({
  user: userReducer,
  khuTro: khuTroReducer,
  phongTro: phongTroReducer,
  hopDong: hopDongReducer,
});

const reducer = (state, action) => {
  if (action.type === actionTypes.LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default reducer;
