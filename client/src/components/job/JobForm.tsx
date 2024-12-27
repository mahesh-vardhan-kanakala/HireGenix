import { useForm } from 'react-hook-form';
import { JobInput, JobType } from '../../types';
import { validateJobInput } from '../../utils/validation';

interface JobFormProps {
  initialData?: Partial<JobInput>;
  onSubmit: (data: JobInput) => Promise<void>;
  isLoading: boolean;
}

export function JobForm({ initialData, onSubmit, isLoading }: JobFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<JobInput>({
    defaultValues: initialData,
  });

  const jobTypes: JobType[] = ['Full-time', 'Part-time', 'Contract', 'Remote'];

  const onFormSubmit = async (data: JobInput) => {
    const { isValid, errors: validationErrors } = validateJobInput(data);
    if (!isValid) {
      // Handle validation errors
      return;
    }
    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register('title', { required: 'Title is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          {...register('company', { required: 'Company is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          {...register('location', { required: 'Location is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
        )}
      </div>

      {/* Job Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Job Type</label>
        <select
          {...register('jobType', { required: 'Job type is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {jobTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.jobType && (
          <p className="mt-1 text-sm text-red-600">{errors.jobType.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      {/* Salary */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Salary</label>
        <input
          type="number"
          {...register('salary', { required: 'Salary is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.salary && (
          <p className="mt-1 text-sm text-red-600">{errors.salary.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
