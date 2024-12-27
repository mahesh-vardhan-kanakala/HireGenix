/*
  # Add storage buckets for applications

  1. New Storage Buckets
    - `applications` bucket for storing resumes and cover letters
  
  2. Security
    - Enable public access for authenticated users
    - Add policies for upload and download
*/

-- Create applications bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('applications', 'applications', false)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies
CREATE POLICY "Authenticated users can upload applications"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'applications' AND
  (storage.foldername(name))[1] IN ('resumes', 'cover-letters')
);

CREATE POLICY "Users can read their own applications"
ON storage.objects FOR SELECT TO authenticated
USING (
  bucket_id = 'applications' AND
  auth.uid()::text = (storage.foldername(name))[2]
);