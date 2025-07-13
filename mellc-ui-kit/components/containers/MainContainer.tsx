import React from 'react';
import {
  alignContentClass,
  alignItemsClass,
  bgColorClass,
  displayClass,
  flexDirectionClass,
  flexWrapClass,
  gapClass,
  justifyContentClass,
  minHeightClass,
  overflowClass,
  paddingBottomClass,
  paddingClass,
  paddingLeftClass,
  paddingRightClass,
  paddingTopClass,
  paddingXClass,
  paddingYClass,
  widthClass,
} from '../../theme';
import { type BaseContainerProps, ResponsiveValue } from './types-container';

function buildClasses(
  defaultDisplay: keyof typeof displayClass,
  {
    bg = 'white',
    overflow,
    display = defaultDisplay,
    minHeight = 'screen',
    width,
    flexDirection = 'col',
    flexWrap,
    justify,
    alignItems = 'start',
    alignContent,
    padding = 'md',
    pt,
    pb,
    pl,
    pr,
    px,
    py,
    responsiveDisplay,
    gap,
    className,
  }: BaseContainerProps,
) {
  function applyResponsiveClasses<T extends string>(
    responsiveProp: ResponsiveValue<T> | undefined,
    classMap: Record<string, string>,
  ): string[] {
    if (!responsiveProp) return [];

    return Object.entries(responsiveProp).map(([breakpoint, value]) => {
      if (!value || !classMap[value]) return '';
      return breakpoint === 'base' ? classMap[value] : `${breakpoint}:${classMap[value]}`;
    });
  }
  return [
    bg ? bgColorClass[bg as keyof typeof bgColorClass] || bg : '',
    overflow ? overflowClass[overflow] : '',
    display ? displayClass[display] : '',
    ...applyResponsiveClasses(responsiveDisplay, displayClass),
    typeof minHeight === 'number'
      ? `min-h-[${minHeight}px]`
      : minHeight
        ? minHeightClass[minHeight]
        : '',
    typeof width === 'number' ? `w-[${width}px]` : width ? widthClass[width] : '',
    flexDirection ? flexDirectionClass[flexDirection] : '',
    flexWrap ? flexWrapClass[flexWrap] : '',
    justify ? justifyContentClass[justify] : '',
    alignItems ? alignItemsClass[alignItems] : '',
    alignContent ? alignContentClass[alignContent] : '',
    padding ? paddingClass[padding] : '',
    pt ? paddingTopClass[pt] : '',
    pb ? paddingBottomClass[pb] : '',
    pl ? paddingLeftClass[pl] : '',
    pr ? paddingRightClass[pr] : '',
    px ? paddingXClass[px] : '',
    py ? paddingYClass[py] : '',
    gap ? gapClass[gap] : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');
}

export default function MainContainer(props: BaseContainerProps) {
  const classes = buildClasses('flex', props);
  return <div className={classes}>{props.children}</div>;
}
