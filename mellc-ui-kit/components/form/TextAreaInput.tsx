import React from 'react';
import { BaseTextareaProps } from './types-forms';

export default function TextAreaInput({
  id,
  name,
  label,
  placeholder,
  required = false,
  rows = 4,
  ...rest
}: BaseTextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 font-medium">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-black"
        {...rest}
      />
    </div>
  );
}
