import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { Job } from '../../types';
import { supabase } from '../../services/supabase';

interface ApplicationModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
}

interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  coverLetter: FileList;
  resume: FileList;
}

export function ApplicationModal({ job, isOpen, onClose }: ApplicationModalProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ApplicationForm>();

  if (!isOpen) return null;

  const onSubmit = async (data: ApplicationForm) => {
    try {
      // Upload resume
      const resumeFile = data.resume[0];
      const resumeExt = resumeFile.name.split('.').pop();
      const resumeFileName = `${Math.random()}.${resumeExt}`;
      const resumePath = `resumes/${resumeFileName}`;

      const { error: resumeUploadError } = await supabase.storage
        .from('applications')
        .upload(resumePath, resumeFile);

      if (resumeUploadError) throw resumeUploadError;

      // Upload cover letter
      const coverLetterFile = data.coverLetter[0];
      const coverLetterExt = coverLetterFile.name.split('.').pop();
      const coverLetterFileName = `${Math.random()}.${coverLetterExt}`;
      const coverLetterPath = `cover-letters/${coverLetterFileName}`;

      const { error: coverLetterUploadError } = await supabase.storage
        .from('applications')
        .upload(coverLetterPath, coverLetterFile);

      if (coverLetterUploadError) throw coverLetterUploadError;

      // Create application
      const { error: applicationError } = await supabase
        .from('applications')
        .insert({
          job_id: job.id,
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          cover_letter: coverLetterPath,
          resume_url: resumePath
        });

      if (applicationError) throw applicationError;

      onClose();
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Apply for {job.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              {...register('fullName', { required: 'Full name is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Resume (PDF, DOC, DOCX)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              {...register('resume', { 
                required: 'Resume is required',
                validate: {
                  fileType: (files) => {
                    if (!files[0]) return true;
                    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                    return validTypes.includes(files[0].type) || 'Please upload a PDF or Word document';
                  },
                  fileSize: (files) => {
                    if (!files[0]) return true;
                    return files[0].size <= 5 * 1024 * 1024 || 'File size must be less than 5MB';
                  }
                }
              })}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {errors.resume && (
              <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Letter (PDF, DOC, DOCX)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              {...register('coverLetter', {
                required: 'Cover letter is required',
                validate: {
                  fileType: (files) => {
                    if (!files[0]) return true;
                    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                    return validTypes.includes(files[0].type) || 'Please upload a PDF or Word document';
                  },
                  fileSize: (files) => {
                    if (!files[0]) return true;
                    return files[0].size <= 5 * 1024 * 1024 || 'File size must be less than 5MB';
                  }
                }
              })}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {errors.coverLetter && (
              <p className="mt-1 text-sm text-red-600">{errors.coverLetter.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
