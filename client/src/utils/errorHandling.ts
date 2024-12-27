export const handleApiError = (error: any): string => {
  if (error.response) {
    // Server responded with an error status
    const message = error.response.data?.message;
    if (message) return message;

    switch (error.response.status) {
      case 400:
        return 'Invalid request. Please check your input.';
      case 401:
        return 'Please sign in to continue.';
      case 403:
        return 'You do not have permission to perform this action.';
      case 404:
        return 'The requested resource was not found.';
      case 500:
        return 'Server error. Please try again later.';
      default:
        return 'An unexpected error occurred.';
    }
  } else if (error.request) {
    // Request was made but no response received
    return 'Unable to connect to the server. Please check your internet connection.';
  } else {
    // Error in request setup
    return 'An error occurred while processing your request.';
  }
};