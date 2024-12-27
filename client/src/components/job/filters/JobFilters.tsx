import React from 'react';
import { FilterSection } from './FilterSection';
import { FilterCheckbox } from './FilterCheckbox';
import { JobType } from '../../../types';

interface Filters {
  types: JobType[];
  companySize: string[];
  locations: string[];
  salaryRanges: string[];
}

interface JobFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export function JobFilters({ filters, onChange }: JobFiltersProps) {
  const handleTypeChange = (type: JobType) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    onChange({ ...filters, types: newTypes });
  };

  const handleCompanySizeChange = (size: string) => {
    const newSizes = filters.companySize.includes(size)
      ? filters.companySize.filter(s => s !== size)
      : [...filters.companySize, size];
    onChange({ ...filters, companySize: newSizes });
  };

  const handleLocationChange = (location: string) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter(l => l !== location)
      : [...filters.locations, location];
    onChange({ ...filters, locations: newLocations });
  };

  const handleSalaryChange = (range: string) => {
    const newRanges = filters.salaryRanges.includes(range)
      ? filters.salaryRanges.filter(r => r !== range)
      : [...filters.salaryRanges, range];
    onChange({ ...filters, salaryRanges: newRanges });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>

      <FilterSection title="Job Type">
        {['Full-time', 'Part-time', 'Contract', 'Remote'].map(type => (
          <FilterCheckbox
            key={type}
            label={type}
            value={type}
            checked={filters.types.includes(type as JobType)}
            onChange={() => handleTypeChange(type as JobType)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Company Size">
        {['1-50', '51-200', '201-500', '500+'].map(size => (
          <FilterCheckbox
            key={size}
            label={size}
            value={size}
            checked={filters.companySize.includes(size)}
            onChange={() => handleCompanySizeChange(size)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Location">
        {['Remote', 'On-site', 'Hybrid'].map(location => (
          <FilterCheckbox
            key={location}
            label={location}
            value={location}
            checked={filters.locations.includes(location)}
            onChange={() => handleLocationChange(location)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Salary Range">
        {['$0-50k', '$50k-100k', '$100k-150k', '$150k+'].map(range => (
          <FilterCheckbox
            key={range}
            label={range}
            value={range}
            checked={filters.salaryRanges.includes(range)}
            onChange={() => handleSalaryChange(range)}
          />
        ))}
      </FilterSection>
    </div>
  );
}