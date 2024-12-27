import { FileValidationError } from './errors';

const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const validateFile = (file: File) => {
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    throw new FileValidationError('Please upload a PDF or Word document');
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new FileValidationError('File size must be less than 5MB');
  }
};