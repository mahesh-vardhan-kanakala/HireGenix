import type { ApiError } from '../../types';

export class ApiRequestError extends Error implements ApiError {
  code?: string;
  details?: Record<string, string>;

  constructor(message: string, code?: string, details?: Record<string, string>) {
    super(message);
    this.name = 'ApiRequestError';
    this.code = code;
    this.details = details;
  }
}

export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof ApiRequestError) {
    return error;
  }

  if (error instanceof Error) {
    return new ApiRequestError(error.message);
  }

  return new ApiRequestError('An unexpected error occurred');
};