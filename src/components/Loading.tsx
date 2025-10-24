import React from 'react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FunctionComponent<LoadingProps> = ({ 
  message = "Loading..." 
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Loading
