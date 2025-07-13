import React from 'react';
import { BaseButtonProps } from './types-button';
import {
  bgColorClass,
  borderRadiusClass,
  borderWidthClass,
  fontSizeClass,
  hoverClass,
  paddingClass,
  textColorClass,
} from '../../theme';
import { UILink } from '../links';

const Button: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  href,
  target = '_self',
  type = 'button',
  title,
  bg,
  color,
  size = 'buttonText',
  padding,
  hover,
  shadowColor,
  radius = 'lg',
  borderWidth,
  fullWidth = false,
  disabled = false,
  isLoading = false,
  loadingText = 'Loading...',
  pill = false,
  className = '',
  ...rest
}) => {
  const isInactive = disabled || isLoading;
  const content = isLoading ? loadingText : children;

  const baseStyles = [
    'inline-flex items-center justify-center text-center transition duration-150 ease-in-out',
    bg ? bgColorClass[bg as keyof typeof bgColorClass] || bg : '',
    color ? textColorClass[color as keyof typeof textColorClass] || color : '',
    size ? fontSizeClass[size as keyof typeof fontSizeClass] || size : '',
    padding ? paddingClass[padding as keyof typeof paddingClass] || padding : '',
    hover ? hoverClass[hover as keyof typeof hoverClass] || hover : '',
    shadowColor,
    pill ? borderRadiusClass.full : borderRadiusClass[radius],
    borderWidth && borderWidthClass[borderWidth],
    fullWidth ? 'w-full' : 'w-auto',
    isInactive ? 'opacity-50 cursor-not-allowed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href && (href.startsWith('http') || href.startsWith('mailto:'))) {
    return (
      <a href={href} target={target} className={baseStyles} aria-disabled={isInactive} {...rest}>
        {title ? title : content}
      </a>
    );
  }

  if (href) {
    return (
      <UILink
        href={href}
        target={target}
        className={baseStyles}
        aria-disabled={isInactive}
        {...rest}
      >
        {title ? title : content}
      </UILink>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles} disabled={isInactive} {...rest}>
      {title ? title : content}
    </button>
  );
};

export default Button;
