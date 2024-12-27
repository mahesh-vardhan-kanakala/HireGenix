import { api } from './config';
import { handleApiError } from './error';
import type { Job, JobInput, SearchParams, PaginatedResponse } from '../../types';

export const jobsApi = {
  getAll: async (params?: SearchParams) => {
    try {
      const { data } = await api.get<PaginatedResponse<Job>>('/jobs', { params });
      return data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  getById: async (id: string) => {
    try {
      const { data } = await api.get<Job>(`/jobs/${id}`);
      return data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  create: async (jobData: JobInput) => {
    try {
      const { data } = await api.post<Job>('/jobs', jobData);
      return data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  update: async (id: string, jobData: Partial<JobInput>) => {
    try {
      const { data } = await api.patch<Job>(`/jobs/${id}`, jobData);
      return data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  delete: async (id: string) => {
    try {
      await api.delete(`/jobs/${id}`);
    } catch (error) {
      throw handleApiError(error);
    }
  },
};