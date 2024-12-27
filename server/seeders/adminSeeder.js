import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({
      where: { email: 'admin@jobhub.com' }
    });

    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('Admin@123', salt);

      await User.create({
        name: 'Admin User',
        email: 'admin@jobhub.com',
        password: hashedPassword,
        role: 'admin'
      });

      console.log('Admin user seeded successfully');
    }
  } catch (error) {
    console.error('Error seeding admin:', error);
  }
};