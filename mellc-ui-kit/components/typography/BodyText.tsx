import {
  textAlignClass,
  fontSizeClass,
  fontWeightClass,
  fontStyleClass,
} from '../../theme/typography';
import { textColorClass } from '../../theme/colors';
import { BaseTextProps, fontTokens } from './types-typography';

export default function BodyText({
  children,
  align = 'left',
  color,
  size = 'body',
  weight = 'normal',
  font = 'body',
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

  return <p className={classes}>{children}</p>;
}
