import {
  textAlignClass,
  fontSizeClass,
  fontWeightClass,
  fontStyleClass,
} from '../../theme/typography';
import { textColorClass } from '../../theme/colors';
import { BaseTextProps, fontTokens } from './types-typography';

export default function Subtitle({
  children,
  align = 'left',
  color = 'black',
  size = 'subtitle',
  weight = 'semibold',
  font = 'heading',
  italic = false,
  className = '',
}: BaseTextProps) {
  const classes = [
    textAlignClass[align],
    textColorClass[color as keyof typeof textColorClass] || color,
    size ? fontSizeClass[size] : '',
    fontWeightClass[weight],
    fontTokens[font],
    fontStyleClass[italic ? 'italic' : 'normal'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <h2 className={classes}>{children}</h2>;
}
