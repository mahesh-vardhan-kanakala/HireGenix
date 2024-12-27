import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Search, Building2 } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Find Your Dream Job Today
          </h1>
          <p className="mt-3 text-xl text-blue-100 sm:mt-5">
            Connect with top employers and opportunities
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/jobs"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:text-lg"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 bg-gray-50 rounded-lg">
                <Briefcase className="w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold">Latest Jobs</h3>
                <p className="mt-2 text-gray-600">Access thousands of job opportunities updated daily</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold">Top Companies</h3>
                <p className="mt-2 text-gray-600">Connect with leading companies across industries</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Search className="w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold">Smart Search</h3>
                <p className="mt-2 text-gray-600">Find the perfect job match with our advanced search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}