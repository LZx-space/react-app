import Axios from 'axios';
import Qs from 'qs';
const RequestApi = Axios.create();
// 必须，否则一些浏览器和组件将无法工作
RequestApi.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// request interceptor
RequestApi.interceptors.request.use((config) => {
    if (config.method !== 'get') {
        config.data = Qs.stringify(config.data);
    }
    return config;
});
// response interceptor
RequestApi.interceptors.response.use(
    (response) => {
        // 所有code非1的全部
        let data = response.data;
        if (data.code === 401 || data.code === 403) {
            // 重定向到登录页面
        }
        return response;
    }, (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);
export default RequestApi;