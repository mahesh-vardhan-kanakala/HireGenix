import React from 'react';
import { Building2, MapPin, Clock, DollarSign } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  onApply: (jobId: string) => void;
}

export function JobCard({ job, onApply }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
          <div className="flex items-center mt-2 text-gray-600">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{job.location}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {job.type}
          </span>
          <div className="flex items-center mt-2 text-gray-600">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>{job.salary}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-gray-600 line-clamp-2">{job.description}</p>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">Posted {job.postedDate}</span>
        </div>
        <button
          onClick={() => onApply(job.id)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}