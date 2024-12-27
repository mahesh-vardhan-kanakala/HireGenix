import React from 'react';
import { JobCard } from './JobCard';
import { LoadingSpinner, ErrorMessage } from '../common';
import type { Job } from '../../types';

interface JobListProps {
  jobs: Job[];
  loading?: boolean;
  error?: string | null;
  onApply?: (jobId: string) => void;
}

export function JobList({ jobs, loading, error, onApply }: JobListProps) {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No jobs found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto px-4">
      {jobs.map(job => (
        <JobCard 
          key={job.id} 
          job={job}
          onApply={onApply}
        />
      ))}
    </div>
  );
}