import { bgColorClass, marginClass, paddingClass } from '../../theme';
import { buttonVariantClass } from '../button/buttonVariant';
import React from 'react';

export type BaseInputProps = {
  id?: string;
  name?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  required?: boolean;
  button?: {
    name: string;
    variant?: string;
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
} & React.FormHTMLAttributes<HTMLInputElement>;

export type BaseTextareaProps = {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  rows?: number;
  cols?: number;
  maxLength?: number;
  minLength?: number;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string; // Controlled component value
  defaultValue?: string; // Uncontrolled component default value
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type BaseFormProps = {
  children?: React.ReactNode;
  fields?: BaseInputProps[];
  title?: string;
  buttonTitle?: string;
  buttonVariant?: keyof typeof buttonVariantClass;
  bg?: keyof typeof bgColorClass | string;
  padding?: keyof typeof paddingClass;
  margin?: keyof typeof marginClass;
  shadow?: boolean;
  radius?: boolean;
  action?: string;
  className?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;
