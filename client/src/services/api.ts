import axios from 'axios';
import { handleApiError } from '../utils/errorHandling';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000, // 5 second timeout
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(handleApiError(error));
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(handleApiError(error));
  }
);

export const auth = {
  login: async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
  register: async (name: string, email: string, password: string, role: string) => {
    try {
      const response = await api.post('/auth/register', { name, email, password, role });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
  validateToken: async () => {
    try {
      const response = await api.get('/auth/validate');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
};

export const jobs = {
  getAll: async (search?: string, location?: string) => {
    try {
      const response = await api.get('/jobs', { params: { search, location } });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
  create: async (jobData: any) => {
    try {
      const response = await api.post('/jobs', jobData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
};

export default api;