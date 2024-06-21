from // src/services/axiosConfig.js

import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { AUTH_LOGOUT } from '@/store/constants';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL || 'http://localhost:8000', // Điều chỉnh base URL của bạn ở đây
  timeout: 50000,
});

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const store = useStore();
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

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const store = useStore();
    const router = useRouter();
    const status = error.response ? error.response.status : 500;

    switch (status) {
      case 401:
        if (store.state.token) {
          store.dispatch(AUTH_LOGOUT);
        }
        router.push({ name: 'Login' });
        break;
      case 404:
        router.push({ name: 'NotFound' });
        break;
      case 503:
        alert('Service unavailable, try again later');
        break;
      case 408:
        alert('Link expired');
        router.push({ name: 'Login' });
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
