import {
  bgColorClass,
  borderRadiusClass,
  borderWidthClass,
  fontSizeClass,
  hoverClass,
  shadowClass,
  textColorClass,
} from '../../theme';
import React from 'react';

export type BaseButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  bg?: keyof typeof bgColorClass | string;
  color?: keyof typeof textColorClass | string;
  size?: keyof typeof fontSizeClass | string;
  padding?: keyof typeof fontSizeClass | string;
  hover?: keyof typeof hoverClass | string;
  shadow?: keyof typeof shadowClass | string;
  shadowColor?: string;
  radius?: keyof typeof borderRadiusClass;
  borderWidth?: keyof typeof borderWidthClass;
  fullWidth?: boolean;
  pill?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
