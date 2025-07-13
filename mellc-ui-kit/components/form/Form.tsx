import React from 'react';
import { BaseFormProps } from './types-forms';
import {
  bgColorClass,
  paddingClass,
  marginClass,
  borderRadiusClass,
  shadowClass,
} from '../../theme';
import { Subtitle } from '../typography';
import { Button } from '../button';
import Input from './Input';

const Form: React.FC<BaseFormProps> = ({
  children,
  fields = [],
  title,
  buttonTitle,
  bg = 'white',
  padding = 'lg',
  margin = 'none',
  shadow = false,
  radius = false,
  className,
  ...rest
}) => {
  const formClasses = [
    bgColorClass[bg as keyof typeof bgColorClass] || bg,
    paddingClass[padding],
    marginClass[margin],
    radius ? borderRadiusClass.lg : '',
    shadow ? shadowClass.md : '',
    'w-full',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <form className={formClasses} {...rest}>
      {title && <Subtitle align="center">{title}</Subtitle>}

      {fields.map((field) => (
        <Input key={field.name} {...field} />
      ))}

      {children}

      {buttonTitle && <Button type="submit">{buttonTitle}</Button>}
    </form>
  );
};

export default Form;
