import Axios from 'axios';
import Qs from 'qs';
const instance = Axios.create();
// 必须，否则一些浏览器和组件将无法工作
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// instance interceptor
instance.interceptors.instance.use((config) => {
    if (config.method !== 'get') {
        config.data = Qs.stringify(config.data);
    }
    return config;
});
// response interceptor
instance.interceptors.response.use(
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
export default instance;