'use client';

import React from 'react';
import {
  bgColorClass,
  displayClass,
  fontSizeClass,
  overflowClass,
  paddingXClass,
  paddingYClass,
  positionClass,
  textColorClass,
  widthClass,
} from '../../theme';
import { ScrollingProps } from './types-scrolling';

const MarqueeBanner: React.FC<ScrollingProps> = ({
  message,
  speed = 15,
  bg,
  color = 'black',
  position = 'relative',
  overflow = 'hidden',
  width = 'full',
  px,
  py,
  display = 'inlineBlock',
  fontSize = 'md',
  className = '',
}) => {
  const containerClasses = [
    bg && (bgColorClass[bg as keyof typeof bgColorClass] || bg),
    positionClass[position],
    overflowClass[overflow],
    widthClass[width],
    px ? paddingXClass[px] : '',
    py ? paddingYClass[py] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const textClasses = [
    textColorClass[color as keyof typeof textColorClass] || color,
    displayClass[display],
    fontSizeClass[fontSize],
    'whitespace-nowrap',
    'tracking-wide',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      <div
        className={textClasses}
        style={{
          animation: `scroll-left ${speed}s linear infinite`,
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default MarqueeBanner;
