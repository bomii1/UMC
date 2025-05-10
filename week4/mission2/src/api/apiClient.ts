import axios from 'axios';
import { attachResponseInterceptor } from './interceptors';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

attachResponseInterceptor(apiClient);

export default apiClient;
