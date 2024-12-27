/*
  # Jobs Schema Setup
  
  1. Tables
    - jobs: Main table for job listings
      - id (uuid, primary key)
      - title (text)
      - company (text) 
      - location (text)
      - type (job_type enum)
      - description (text)
      - requirements (text[])
      - salary (text)
      - status (job_status enum)
      - user_id (uuid)
      - created_at (timestamptz)
      - updated_at (timestamptz)

  2. Security
    - Enable RLS
    - Add policies for CRUD operations
*/

-- Create custom types
CREATE TYPE public.job_type AS ENUM (
  'Full-time',
  'Part-time',
  'Contract',
  'Remote'
);

CREATE TYPE public.job_status AS ENUM (
  'draft',
  'published',
  'closed'
);

-- Create jobs table
CREATE TABLE public.jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company text NOT NULL,
  location text NOT NULL,
  type job_type NOT NULL,
  description text NOT NULL,
  requirements text[] DEFAULT ARRAY[]::text[],
  salary text,
  status job_status NOT NULL DEFAULT 'published',
  user_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view published jobs"
  ON public.jobs
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "Users can create jobs"
  ON public.jobs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own jobs"
  ON public.jobs
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own jobs"
  ON public.jobs
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_jobs_updated_at
  BEFORE UPDATE ON public.jobs
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();