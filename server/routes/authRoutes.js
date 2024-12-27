// routes/authRoutes.js
import express from 'express';
import { register, login, validateToken } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';  // Use 'authMiddleware' here

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/validate', authMiddleware, validateToken);  // Use 'authMiddleware' here

export default router;
