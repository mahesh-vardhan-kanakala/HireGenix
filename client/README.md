## Job Portal Application

### Features
- User authentication (Sign In/Sign Up)
- Job posting for employers
- Job search with filters
- Admin dashboard (coming soon)
- Error handling and loading states
- Responsive design

### Development
1. Install dependencies: `npm install`
2. Set up PostgreSQL database
3. Configure environment variables in `.env`
4. Start development server: `npm run dev`

### Project Structure
- `/src/components`: Reusable UI components
- `/src/pages`: Page components
- `/src/hooks`: Custom React hooks
- `/src/utils`: Utility functions
- `/src/services`: API services
- `/server`: Backend Express.js server
  - `/config`: Database configuration
  - `/controllers`: Route controllers
  - `/models`: Sequelize models
  - `/routes`: Express routes
  - `/middleware`: Custom middleware
  - `/seeders`: Database seeders
