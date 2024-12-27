import { useState, useEffect } from 'react';
import { jobsService } from '../services/jobs';
import type { Job } from '../types';

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = async (search?: string, location?: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await jobsService.getJobs(search, location);
      setJobs(data);
    } catch (err) {
      setError('Failed to fetch jobs. Please try again later.');
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return {
    jobs,
    loading,
    error,
    searchJobs: fetchJobs,
  };
}