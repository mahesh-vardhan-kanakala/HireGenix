export const validateJob = (data) => {
  const errors = [];

  if (!data.title?.trim()) {
    errors.push({ field: 'title', message: 'Title is required' });
  }

  if (!data.company?.trim()) {
    errors.push({ field: 'company', message: 'Company is required' });
  }

  if (!data.location?.trim()) {
    errors.push({ field: 'location', message: 'Location is required' });
  }

  if (!['Full-time', 'Part-time', 'Contract', 'Remote'].includes(data.type)) {
    errors.push({ field: 'type', message: 'Invalid job type' });
  }

  if (!data.description?.trim()) {
    errors.push({ field: 'description', message: 'Description is required' });
  }

  return errors;
};