import {
  textAlignClass,
  fontSizeClass,
  fontWeightClass,
  fontStyleClass,
} from '../../theme/typography';
import { textColorClass } from '../../theme/colors';
import { BaseTextProps, fontTokens } from './types-typography';

export default function Title({
  children,
  align = 'center',
  color = 'black',
  size = 'title',
  weight = 'bold',
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
    'w-full',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <h1 className={classes}>{children}</h1>;
}
