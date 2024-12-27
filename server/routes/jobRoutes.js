import express from 'express';
import { JobController } from '../controllers/jobController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', JobController.getJobs);
router.post('/', authMiddleware, JobController.createJob);
router.patch('/:id', authMiddleware, JobController.updateJob);
router.delete('/:id', authMiddleware, JobController.deleteJob);

export default router;