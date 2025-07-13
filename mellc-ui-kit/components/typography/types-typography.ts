import React from 'react';
import {
  textAlignClass,
  fontSizeClass,
  fontWeightClass,
  fontFamilyClass,
} from '../../theme/typography';
import { textColorClass } from '../../theme/colors';

export const fontTokens = fontFamilyClass;

export type BaseTextProps = {
  children: React.ReactNode;
  align?: keyof typeof textAlignClass;
  color?: keyof typeof textColorClass | string;
  size?: keyof typeof fontSizeClass;
  weight?: keyof typeof fontWeightClass;
  font?: keyof typeof fontTokens;
  italic?: boolean;
  className?: string;
};

export type ListsProps<T> = {
  color?: keyof typeof textColorClass | string;
  listDisc?: boolean;
  lists: T[];
  width?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
};
