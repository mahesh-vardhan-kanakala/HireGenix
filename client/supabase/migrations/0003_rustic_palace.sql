/*
  # Create applications system
  
  1. New Types
    - `application_status` enum for tracking application states
  
  2. New Tables
    - `applications` for storing job applications
  
  3. Security
    - RLS policies for applicants and recruiters
*/

-- Create enum in a separate transaction
DO $$ BEGIN
  CREATE TYPE application_status AS ENUM (
    'pending',
    'reviewed',
    'interviewing',
    'rejected',
    'accepted'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Create applications table
CREATE TABLE IF NOT EXISTS public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid NOT NULL,
  user_id uuid NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  resume_url text NOT NULL,
  cover_letter text,
  status application_status NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  
  CONSTRAINT fk_job
    FOREIGN KEY (job_id)
    REFERENCES public.jobs(id)
    ON DELETE CASCADE
);

-- Enable RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create policies one by one
DO $$ BEGIN
  CREATE POLICY "Users can view their own applications"
    ON public.applications
    FOR SELECT
    TO authenticated
    USING (auth.uid()::text = user_id::text);
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can create applications"
    ON public.applications
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid()::text = user_id::text);
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE POLICY "Job owners can view applications"
    ON public.applications
    FOR SELECT
    TO authenticated
    USING (
      EXISTS (
        SELECT 1 FROM public.jobs
        WHERE jobs.id = applications.job_id
        AND jobs.user_id::text = auth.uid()::text
      )
    );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;