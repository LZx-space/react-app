import Axios from 'axios';
import Qs from 'qs';
const RequestApi = Axios.create();
RequestApi.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// request interceptor
RequestApi.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = Qs.stringify(config.data);
    }
    return config;
});
// response interceptor
RequestApi.interceptors.response.use(
    (response) => {
        // Do something with response data
        let data = response.data;
        response.data = data.data;
        return response;
    }, (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);
export default RequestApi;