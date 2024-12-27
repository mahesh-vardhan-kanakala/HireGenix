import { useState } from 'react';
import { jobsApi } from '../services/api/jobs';
import type { Job, JobInput, ApiError } from '../types';

export function useJobManagement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createJob = async (jobData: JobInput): Promise<Job | null> => {
    try {
      setLoading(true);
      setError(null); // Reset error on each new attempt
      const job = await jobsApi.create(jobData);
      return job;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Failed to create job');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateJob = async (id: string, jobData: Partial<JobInput>): Promise<Job | null> => {
    try {
      setLoading(true);
      setError(null); // Reset error on each new attempt
      const job = await jobsApi.update(id, jobData);
      return job;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Failed to update job');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (id: string): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null); // Reset error on each new attempt
      await jobsApi.delete(id);
      return true;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Failed to delete job');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createJob,
    updateJob,
    deleteJob,
  };
}
