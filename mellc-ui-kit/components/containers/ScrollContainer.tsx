import React from 'react';
import {
  bgColorClass,
  borderRadiusClass,
  displayClass,
  heightClass,
  insetClass,
  marginBottomClass,
  marginClass,
  marginLeftClass,
  marginRightClass,
  marginTopClass,
  marginXClass,
  marginYClass,
  maxHeightClass,
  maxWidthClass,
  minHeightClass,
  minWidthClass,
  overflowClass,
  paddingBottomClass,
  paddingClass,
  paddingLeftClass,
  paddingRightClass,
  paddingTopClass,
  paddingXClass,
  paddingYClass,
  positionClass,
  widthClass,
  zIndexClass,
} from '../../theme';
import { ResponsiveValue, type BaseContainerProps } from './types-container';

function buildClasses(props: BaseContainerProps) {
  const {
    bg,
    borderRadius,
    overflow = 'auto',
    height,
    minHeight,
    maxHeight = 'screen',
    width,
    minWidth,
    maxWidth,
    position,
    top,
    bottom,
    left,
    right,
    zIndex,
    margin,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    padding,
    pt,
    pb,
    pl,
    pr,
    px,
    py,
    responsiveDisplay,
    className,
  } = props;

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

  const classes = [
    bg ? bgColorClass[bg as keyof typeof bgColorClass] || bg : '',
    borderRadius ? borderRadiusClass[borderRadius] : '',
    overflow ? overflowClass[overflow] : '',
    displayClass['block'], // Always block to contain scroll
    ...applyResponsiveClasses(responsiveDisplay, displayClass),
    typeof height === 'number' ? `h-[${height}px]` : height ? heightClass[height] : '',
    typeof minHeight === 'number'
      ? `min-h-[${minHeight}px]`
      : minHeight
        ? minHeightClass[minHeight]
        : '',
    typeof maxHeight === 'number'
      ? `max-h-[${maxHeight}px]`
      : maxHeight
        ? maxHeightClass[maxHeight]
        : '',
    typeof width === 'number' ? `w-[${width}px]` : width ? widthClass[width] : '',
    typeof minWidth === 'number'
      ? `min-w-[${minWidth}px]`
      : minWidth
        ? minWidthClass[minWidth]
        : '',
    typeof maxWidth === 'number'
      ? `max-w-[${maxWidth}px]`
      : maxWidth
        ? maxWidthClass[maxWidth]
        : '',
    position ? positionClass[position] : '',
    top !== undefined ? `top-${insetClass[top]}` : '',
    bottom !== undefined ? `bottom-${insetClass[bottom]}` : '',
    left !== undefined ? `left-${insetClass[left]}` : '',
    right !== undefined ? `right-${insetClass[right]}` : '',
    zIndex ? zIndexClass[zIndex] : '',
    margin ? marginClass[margin] : '',
    mt ? marginTopClass[mt] : '',
    mb ? marginBottomClass[mb] : '',
    ml ? marginLeftClass[ml] : '',
    mr ? marginRightClass[mr] : '',
    mx ? marginXClass[mx] : '',
    my ? marginYClass[my] : '',
    padding ? paddingClass[padding] : '',
    pt ? paddingTopClass[pt] : '',
    pb ? paddingBottomClass[pb] : '',
    pl ? paddingLeftClass[pl] : '',
    pr ? paddingRightClass[pr] : '',
    px ? paddingXClass[px] : '',
    py ? paddingYClass[py] : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return classes;
}

export default function ScrollContainer(props: BaseContainerProps) {
  const classes = buildClasses(props);
  return <div className={classes}>{props.children}</div>;
}
