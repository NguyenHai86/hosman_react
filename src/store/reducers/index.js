import { combineReducers } from "redux";
import userReducer from "./userReducer";
import khuTroReducer from "./khuTroReducer";
const reducer = combineReducers({ user: userReducer, khutro: khuTroReducer });
export default reducer;
