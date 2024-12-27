import { api } from './config';
import { handleApiError } from './error';

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('clerk-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(handleApiError(error))
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(handleApiError(error))
);