import React from 'react';
import {
  heightClass,
  minHeightClass,
  maxHeightClass,
  widthClass,
  minWidthClass,
  maxWidthClass,
  spaceYClass,
  alignContentClass,
  alignItemsClass,
  bgColorClass,
  displayClass,
  flexDirectionClass,
  flexGrowClass,
  flexWrapClass,
  gapClass,
  insetClass,
  justifyContentClass,
  marginBottomClass,
  marginClass,
  marginLeftClass,
  marginRightClass,
  marginTopClass,
  marginXClass,
  marginYClass,
  overflowClass,
  paddingBottomClass,
  paddingClass,
  paddingLeftClass,
  paddingRightClass,
  paddingTopClass,
  paddingXClass,
  paddingYClass,
  positionClass,
  zIndexClass,
} from '../../theme';
import { borderRadiusClass, ResponsiveValue, type BaseContainerProps } from './types-container';

function buildClasses(props: BaseContainerProps) {
  const {
    bg,
    borderRadius,
    overflow,
    display = 'flex',
    responsiveDisplay,
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    flexGrow,
    flexDirection,
    flexWrap,
    justify,
    alignItems,
    alignContent,
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
    gap,
    spaceY,
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
    !(responsiveDisplay && responsiveDisplay.base) ? displayClass[display] : '',
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
    flexGrow ? flexGrowClass[flexGrow] : '',
    flexDirection ? flexDirectionClass[flexDirection] : '',
    flexWrap ? flexWrapClass[flexWrap] : '',
    justify ? justifyContentClass[justify] : '',
    alignItems ? alignItemsClass[alignItems] : '',
    alignContent ? alignContentClass[alignContent] : '',
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
    gap ? gapClass[gap] : '',
    spaceY ? spaceYClass[spaceY] : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return classes;
}

export default function FlexContainer(props: BaseContainerProps) {
  const classes = buildClasses(props);
  return <div className={classes}>{props.children}</div>;
}
