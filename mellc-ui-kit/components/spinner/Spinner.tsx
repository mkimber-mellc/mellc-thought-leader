import React from 'react';
import { spinnerSizeClass, textColorClass } from '../../theme';
import { SpinnerProps } from './types-spinner';

const Spinner: React.FC<SpinnerProps> = ({
  size = 'sm',
  color = 'black',
  className = '',
  ariaLabel = 'Loading...',
}) => {
  const spinnerClasses = [
    'animate-spin',
    spinnerSizeClass[size],
    textColorClass[color as keyof typeof textColorClass] || color,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      className={spinnerClasses}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="status"
      aria-label={ariaLabel}
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
      />
    </svg>
  );
};

export default Spinner;
