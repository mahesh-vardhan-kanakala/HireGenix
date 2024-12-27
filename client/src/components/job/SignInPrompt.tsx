import React from 'react';
import { X } from 'lucide-react';
import { SignInButton } from '@clerk/clerk-react';

interface SignInPromptProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInPrompt({ isOpen, onClose }: SignInPromptProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Sign In Required</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-6">
          Please sign in to apply for this position. Creating an account allows you to:
        </p>
        
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>Apply to multiple jobs</li>
          <li>Track your applications</li>
          <li>Get notified about application updates</li>
          <li>Save jobs for later</li>
        </ul>

        <div className="flex justify-center">
          <SignInButton mode="modal">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Sign In to Continue
            </button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
}