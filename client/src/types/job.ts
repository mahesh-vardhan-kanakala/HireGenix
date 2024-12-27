export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote';

export type JobStatus = 'draft' | 'published' | 'closed';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  status: JobStatus;
  description: string;
  requirements: string[];
  salary: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface JobInput {
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
  requirements: string[];
  salary: string;
}