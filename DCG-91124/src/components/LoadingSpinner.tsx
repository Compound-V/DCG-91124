import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md',
  color = '#ff5500'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} animate-spin`}
        style={{
          borderRadius: '50%',
          border: `2px solid ${color}`,
          borderTopColor: 'transparent'
        }}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default LoadingSpinner;