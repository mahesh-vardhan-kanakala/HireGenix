/*
  # Seed Jobs Data
  
  1. Content
    - Add initial set of sample jobs
    - Varied job types and locations
    - Realistic job descriptions and requirements
*/

INSERT INTO public.jobs (
  title,
  company,
  location,
  type,
  description,
  requirements,
  salary,
  status,
  user_id
) VALUES 
(
  'Senior Frontend Developer',
  'TechCorp Solutions',
  'San Francisco, CA',
  'Full-time',
  'We are seeking an experienced Frontend Developer to join our growing team. You will be responsible for building responsive web applications and implementing user-facing features.',
  ARRAY[
    '5+ years of experience with React',
    'Strong TypeScript skills',
    'Experience with modern frontend tools',
    'Excellent problem-solving abilities'
  ],
  '$120,000 - $180,000',
  'published',
  '00000000-0000-0000-0000-000000000000'
),
(
  'Product Designer',
  'Design Innovation Labs',
  'New York, NY',
  'Full-time',
  'Join our creative team as a Product Designer. Help shape the future of our digital products through innovative design solutions.',
  ARRAY[
    'Portfolio demonstrating UI/UX projects',
    'Experience with Figma',
    'Understanding of design systems',
    '3+ years of product design experience'
  ],
  '$90,000 - $140,000',
  'published',
  '00000000-0000-0000-0000-000000000000'
),
(
  'Backend Engineer',
  'CloudScale Systems',
  'Remote',
  'Remote',
  'Looking for a Backend Engineer to help scale our cloud infrastructure. Work with modern technologies and solve complex problems.',
  ARRAY[
    'Strong Node.js experience',
    'Experience with cloud platforms (AWS/GCP)',
    'Knowledge of microservices architecture',
    'Understanding of DevOps practices'
  ],
  '$130,000 - $170,000',
  'published',
  '00000000-0000-0000-0000-000000000000'
),
(
  'DevOps Engineer',
  'InfraTeam',
  'Seattle, WA',
  'Contract',
  'Join our DevOps team to help automate and improve our deployment processes. Work with cutting-edge cloud technologies.',
  ARRAY[
    'Experience with Kubernetes',
    'Strong Linux administration skills',
    'Knowledge of CI/CD pipelines',
    'Infrastructure as Code experience'
  ],
  '$140,000 - $160,000',
  'published',
  '00000000-0000-0000-0000-000000000000'
),
(
  'Mobile Developer',
  'AppWorks Mobile',
  'Austin, TX',
  'Full-time',
  'We are looking for a Mobile Developer to join our team and help build next-generation mobile applications.',
  ARRAY[
    'Experience with React Native',
    'Knowledge of iOS and Android platforms',
    'Understanding of mobile UI/UX principles',
    'Experience with mobile state management'
  ],
  '$100,000 - $150,000',
  'published',
  '00000000-0000-0000-0000-000000000000'
);