import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to join our team...',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with modern frontend tools',
    ],
    postedDate: '2024-03-15',
    salary: '$120,000 - $160,000'
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataFlow Systems',
    location: 'Remote',
    type: 'Remote',
    description: 'Join our distributed team building scalable backend solutions...',
    requirements: [
      'Strong Node.js experience',
      'Database design expertise',
      'API development experience',
    ],
    postedDate: '2024-03-14',
    salary: '$100,000 - $140,000'
  }
];