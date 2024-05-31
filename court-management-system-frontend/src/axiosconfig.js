// src/axiosConfig.js
import axios from 'axios';
import { store }from './store';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
});

axiosInstance.interceptors.request.use(
    (config) => {
    debugger;
    const state = store.getState();
    const token = state.user.user.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
