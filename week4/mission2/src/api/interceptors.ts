import { AxiosInstance } from 'axios';
import { refreshAccessToken } from './auth';

export const attachResponseInterceptor = (apiClient: AxiosInstance) => {
  apiClient.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalRequest = err.config;

      if (err.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) return Promise.reject(err);

        try {
          const newAccessToken = await refreshAccessToken(refreshToken);
          localStorage.setItem('accessToken', newAccessToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        } catch (refreshErr) {
          return Promise.reject(refreshErr);
        }
      }

      return Promise.reject(err);
    }
  );
};
