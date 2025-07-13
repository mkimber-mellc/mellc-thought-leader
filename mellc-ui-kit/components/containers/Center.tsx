import {
  alignItemsClass,
  bgColorClass,
  displayClass,
  heightClass,
  justifyContentClass,
  marginClass,
  marginXClass,
  marginYClass,
  paddingClass,
  paddingXClass,
  paddingYClass,
  widthClass,
} from '../../theme';
import type { BaseContainerProps } from './types-container';

function buildCenterClasses({
  bg,
  padding,
  px,
  py,
  margin,
  mx,
  my,
  width,
  height,
  className,
}: BaseContainerProps) {
  return [
    displayClass.flex,
    justifyContentClass.center,
    alignItemsClass.center,
    bg ? bgColorClass[bg as keyof typeof bgColorClass] || bg : '',
    padding ? paddingClass[padding] : '',
    px ? paddingXClass[px] : '',
    py ? paddingYClass[py] : '',
    margin ? marginClass[margin] : '',
    mx ? marginXClass[mx] : '',
    my ? marginYClass[my] : '',
    typeof width === 'number' ? `w-[${width}px]` : width ? widthClass[width] : '',
    typeof height === 'number' ? `h-[${height}px]` : height ? heightClass[height] : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');
}

export default function Center(props: BaseContainerProps) {
  const classes = buildCenterClasses(props);
  return <div className={classes}>{props.children}</div>;
}
