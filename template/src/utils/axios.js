// 接口统一拦截处理
import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';

const vm = new Vue();

const api_location = process.env.NODE_ENV === 'production' ? "http://ops.dsj361.net" : "http://ops-local.dsj361.net";

const api = axios.create({
  baseURL: api_location,
  responseType: 'json',
  timeout: 30000, // 超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  // If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
  // 数据转换 后端所需要参数的格式（a=1&b=2）
  transformRequest: [(data) => {
    return qs.stringify(data);
  }]
});

// 请求拦截
api.interceptors.request.use(
  (config) => {
    // token统一加在头部 在登陆的时候，存入token
    // const token = cookie.get('his_token');
    // if (token) {
    //   config.headers.token = token;
    // }
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截
api.interceptors.response.use((res = {}) => {
  const data = res.data;
  if (data['success']) {
    return Promise.resolve(data);
  } else {
    return Promise.reject(data);
  }
}, (e) => {
  vm.$message.error('系统错误');
  return Promise.reject(e);
});

export default api;
