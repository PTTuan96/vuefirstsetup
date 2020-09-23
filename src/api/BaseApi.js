import axios from 'axios';
import store from '@/store';

const instance = axios.create({
    baseURL: 'http://localhost:8085/api/v1'
});

instance.interceptors.request.use(request => {
    request.headers.Authorization =  store.state.token;
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
export default instance;