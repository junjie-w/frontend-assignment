import React from 'react';

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

const Error: React.FunctionComponent<ErrorProps> = ({ 
  message = "Oops - error 😮",
  onRetry
}) => {
  return (
    <div>
      <p>{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Error
