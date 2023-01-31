import actionTypes from '../actions/actionTypes';
import { cloneDeep } from 'lodash';
let inital = {
    isLogin: false,
    userLogin: null,
};
const reducer = (state = inital, action) => {
    switch (action.type) {
        case actionTypes.SET_USERLOGIN:
            state.isLogin = true;
            state.userLogin = action.user;
            return cloneDeep(state);
        default:
            return cloneDeep(state);
    }
};
export default reducer;
