import React from 'react';
import { CardProps } from './types-cards';
import {
  bgColorClass,
  marginClass,
  marginXClass,
  marginYClass,
  paddingClass,
  paddingXClass,
  paddingYClass,
} from '../../theme';

const Card: React.FC<CardProps> = ({
  children,
  bg = 'white',
  margin,
  mx,
  my,
  padding,
  px,
  py,
  rounded = true,
  shadowColor,
  className = '',
  ...rest
}) => {
  const cardClasses = [
    'h-full w-full flex-col',
    bgColorClass[bg as keyof typeof bgColorClass] ?? bg,
    margin && marginClass[margin],
    mx && marginXClass[mx],
    my && marginYClass[my],
    padding ? paddingClass[padding as keyof typeof paddingClass] || padding : undefined,
    px && paddingXClass[px],
    py && paddingYClass[py],
    rounded && 'rounded-xl',
    shadowColor,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

export default Card;
