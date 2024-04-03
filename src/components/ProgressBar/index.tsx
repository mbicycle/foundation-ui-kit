import React from 'react';

export type ComponentWithClassProps = {
  className?: string;
};

type ProgressBarProps = {
  progress: number;
  size?: 'small' | 'default' | 'large' | 'extra-large';
} & ComponentWithClassProps;

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, size = 'default', className = '' }) => {
  let barHeight = '';
  switch (size) {
    case 'small':
      barHeight = 'h-1.5';
      break;
    case 'large':
      barHeight = 'h-4';
      break;
    case 'extra-large':
      barHeight = 'h-6';
      break;
    default:
      barHeight = 'h-2.5';
      break;
  }

  return (
      <div className={`w-full bg-gray-200 rounded-full ${barHeight} dark:bg-gray-700 ${className}`}>
        <div
            className={`bg-blue-600 rounded-full dark:bg-blue-500 ${barHeight}`}
            style={{ width: `${progress}%` }}
        />
      </div>
  );
};

export default ProgressBar;
