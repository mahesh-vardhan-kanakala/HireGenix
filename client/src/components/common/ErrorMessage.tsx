import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
      <p className="text-red-600 mb-2">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Try Again
        </button>
      )}
    </div>
  );
}