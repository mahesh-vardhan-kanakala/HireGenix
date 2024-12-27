import { supabase } from './supabase';
import type { Job } from '../types';

export const jobsService = {
  async getJobs(search?: string, location?: string) {
    try {
      let query = supabase
        .from('jobs')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (search) {
        query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%,company.ilike.%${search}%`);
      }

      if (location) {
        query = query.ilike('location', `%${location}%`);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Supabase request failed', error);
        throw new Error('Failed to fetch jobs');
      }

      return data || [];
    } catch (error) {
      console.error('Error in getJobs:', error);
      throw error;
    }
  },

  async createJob(jobData: Omit<Job, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('jobs')
      .insert([jobData])
      .select()
      .single();

    if (error) {
      console.error('Error creating job:', error);
      throw new Error('Failed to create job');
    }

    return data;
  },

  async updateJob(id: string, jobData: Partial<Job>) {
    const { data, error } = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating job:', error);
      throw new Error('Failed to update job');
    }

    return data;
  },

  async deleteJob(id: string) {
    const { error } = await supabase
      .from('jobs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting job:', error);
      throw new Error('Failed to delete job');
    }
  }
};