import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Briefcase } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="./src/assets/logo.png" alt="HireGenix" className="w-8 h-8" />
            <h1 className="ml-2 text-2xl font-bold text-blue-600">HireGenix</h1>
          </Link>
          
          <nav className="flex items-center space-x-4">
            <Link to="/jobs" className="text-gray-500 hover:text-gray-900">
              Find Jobs
            </Link>
            <SignedIn>
              <Link to="/post-job" className="text-gray-500 hover:text-gray-900">
                Post Job
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </nav>
        </div>
      </div>
    </header>
  );
}