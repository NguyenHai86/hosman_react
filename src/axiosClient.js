import axios from 'axios';
import config from '../config';

const axiosClient = axios.create({
    baseURL: config.api.API_BASE_URL,
    withCredentials: false,
});
export default axiosClient;
