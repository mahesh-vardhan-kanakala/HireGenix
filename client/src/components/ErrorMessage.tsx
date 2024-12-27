interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="text-center py-4">
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