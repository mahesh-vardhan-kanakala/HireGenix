import { useNavigate } from 'react-router-dom';
import { JobForm } from '../components/job'; // Ensure this form component is correctly implemented
import { useJobManagement } from '../hooks'; // Custom hook for managing job-related API calls and state
import { ErrorMessage } from '../components/common'; // Error component to display error messages
import type { JobInput } from '../types'; // Type definition for the job input data

export function PostJob() {
  const navigate = useNavigate();
  const { createJob, loading, error } = useJobManagement(); // Custom hook to handle job creation

  const handleSubmit = async (data: JobInput) => {
    try {
      // Call the createJob function to send job data to the server
      const job = await createJob(data);

      if (job) {
        // Redirect to the /jobs page if job creation is successful
        navigate('/jobs');
      }
    } catch (error) {
      console.error("Error creating job:", error);
      // Optionally, you can handle more specific errors or display custom messages here
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Post a New Job</h2>

      {/* Conditionally render error message */}
      {error && <ErrorMessage message={error} />}

      {/* JobForm component for submitting job data */}
      <JobForm onSubmit={handleSubmit} isLoading={loading} />
    </div>
  );
}
