export const validateJobInput = (input: any) => {
  const errors: Record<string, string> = {};

  if (!input.title?.trim()) {
    errors.title = 'Title is required';
  }

  if (!input.company?.trim()) {
    errors.company = 'Company is required';
  }

  if (!input.location?.trim()) {
    errors.location = 'Location is required';
  }

  if (!input.description?.trim()) {
    errors.description = 'Description is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};