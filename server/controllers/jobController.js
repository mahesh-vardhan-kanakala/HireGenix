import { JobModel } from '../models/jobModel.js';
import { validateJob } from '../validators/jobValidator.js';

export const JobController = {
  async getJobs(req, res) {
    try {
      const { search, location } = req.query;
      const jobs = await JobModel.findAll({ search, location });
      res.json(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async createJob(req, res) {
    try {
      const errors = validateJob(req.body);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      const job = await JobModel.create({
        ...req.body,
        userId: req.user.id
      });
      res.status(201).json(job);
    } catch (error) {
      console.error('Error creating job:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async updateJob(req, res) {
    try {
      const { id } = req.params;
      const job = await JobModel.update(id, {
        ...req.body,
        userId: req.user.id
      });
      
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      
      res.json(job);
    } catch (error) {
      console.error('Error updating job:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async deleteJob(req, res) {
    try {
      const { id } = req.params;
      const deleted = await JobModel.delete(id, req.user.id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'Job not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting job:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};