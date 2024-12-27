import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import { seedAdmin } from './seeders/adminSeeder.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;

// Database sync and server start
sequelize.sync()
  .then(async () => {
    await seedAdmin();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });
