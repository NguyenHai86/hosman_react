import * as queryString from 'query-string';

import axios from '../axiosClient';

const userServices = {
    checkUser(loginBody) {
        return axios.post('/api/user/checkuser', loginBody);
    },
};
