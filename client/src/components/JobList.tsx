import React from 'react';
import { JobCard } from './JobCard';
import type { Job } from '../types';

interface JobListProps {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

export function JobList({ jobs, loading, error }: JobListProps) {
  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No jobs found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}