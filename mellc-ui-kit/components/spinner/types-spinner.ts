import { spinnerSizeClass, textColorClass } from '../../theme';

export type SpinnerProps = {
  size?: keyof typeof spinnerSizeClass;
  color?: keyof typeof textColorClass | string;
  className?: string;
  ariaLabel?: string;
};
