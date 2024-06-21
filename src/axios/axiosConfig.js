// src/services/axiosConfig.js

import axios from 'axios';
import store from '../stores/index'; // Đảm bảo đường dẫn đúng đến file store của bạn
import router from '../router'; // Đảm bảo đường dẫn đúng đến file router của bạn

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL || 'http://localhost:8000',
  timeout: 50000,
});

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.state.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : 500;
    switch (status) {
      case 401:
        if (store.state.token) {
          store.dispatch('AUTH_LOGOUT');
        }
        break;
      case 404:
        router.push({ name: 'NotFound' }); // Chỉnh sửa đường dẫn và tên route phù hợp với ứng dụng của bạn
        break;
      case 503:
        alert('Service unavailable, try again later');
        break;
      case 408:
        alert('Request timeout, please try again');
        break;
      default:
        alert('An error occurred');
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
