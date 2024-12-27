import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { JobList } from '../components/job/JobList';
import { JobFilters } from '../components/job/filters';
import { useJobs } from '../hooks/useJobs';
import type { JobType } from '../types';

interface Filters {
  types: JobType[];
  companySize: string[];
  locations: string[];
  salaryRanges: string[];
}

export function JobsPage() {
  const { jobs, loading, error, searchJobs } = useJobs();
  const [searchParams, setSearchParams] = useState({ query: '', location: '' });
  const [filters, setFilters] = useState<Filters>({
    types: [],
    companySize: [],
    locations: [],
    salaryRanges: [],
  });

  const handleSearch = (query: string, location: string) => {
    setSearchParams({ query, location });
    searchJobs(query, location);
  };

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    // Apply filters to the job search
    searchJobs(
      searchParams.query,
      searchParams.location,
      newFilters
    );
  };

  const filteredJobs = jobs.filter(job => {
    if (filters.types.length && !filters.types.includes(job.type)) return false;
    // Add more filter logic here when the backend supports these fields
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Available Jobs</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <JobFilters filters={filters} onChange={handleFilterChange} />
          </div>
          <div className="col-span-9">
            <JobList 
              jobs={filteredJobs} 
              loading={loading} 
              error={error}
            />
          </div>
        </div>
      </main>
    </div>
  );
}