Here’s an updated `README.md` reflecting **Clerk** authentication:

```markdown
# Portal Project

## Overview

The **Portal Project** is a full-stack application designed to manage job listings, user authentication, and job applications. It consists of a client-side built using **React** and a server-side built using **Node.js** and **Express**, connected to a **Supabase** backend for managing data storage. Authentication is handled using **Clerk**, which provides a secure and easy-to-use user authentication solution.

This project features:

- User authentication (Sign In/Sign Up) with Clerk
- Job listing and management
- Job filters and search functionality
- Responsive UI
- Integration with Supabase for real-time data handling

## Features

- **Authentication**: Users can sign up, sign in, and view protected job listing pages using **Clerk** authentication.
- **Job Management**: Employers can post new jobs, and applicants can search and apply for jobs.
- **Filters**: The application includes a filter system to help users search for jobs by category, location, etc.
- **Responsive Design**: The app is fully responsive and works across various devices.
- **Error Handling**: The application provides a robust error handling mechanism for a smooth user experience.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express, Supabase
- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Clerk account for authentication
- Supabase account for database

### Steps to Run Locally

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/portal1.git
cd portal1
```

#### 2. Setup the Client

Navigate to the `client` directory:

```bash
cd client
```

Install the dependencies:

```bash
npm install
```

#### 3. Setup the Server

Navigate to the `server` directory:

```bash
cd server
```

Install the dependencies:

```bash
npm install
```

#### 4. Environment Variables

Create a `.env` file in both the `client` and `server` directories and add the necessary environment variables for **Clerk** and **Supabase**.

##### Client `.env`:
```
VITE_CLERK_FRONTEND_API=your_clerk_frontend_api
VITE_CLERK_API_KEY=your_clerk_api_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

##### Server `.env`:
```
CLERK_API_KEY=your_clerk_api_key
CLERK_API_SECRET=your_clerk_api_secret
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_service_role_key
```

#### 5. Run the Application

To run the client and server simultaneously:

- In one terminal window, run the server:
  ```bash
  npm run dev
  ```

- In another terminal window, run the client:
  ```bash
  cd client
  npm run dev
  ```

### Running the App

Visit `http://localhost:5173/` to view the app in your browser.

## Contributing

Feel free to fork this repository, open issues, or submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key changes:

1. **Clerk Authentication**: Added Clerk-specific environment variables like `VITE_CLERK_FRONTEND_API` and `VITE_CLERK_API_KEY` for the client-side and `CLERK_API_KEY`, `CLERK_API_SECRET` for the server-side.
2. **Authentication Flow**: The authentication system is now powered by Clerk.
#   H i r e G e n i x  
 #   H i r e G e n i x  
 #   H i r e G e n i x  
 #   H i r e G e n i x  
 #   H i r e G e n i x  
 