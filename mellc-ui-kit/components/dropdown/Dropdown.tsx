'use client';

import React, { useState } from 'react';
import { DropdownProps, Option } from './types-dropdown';
import { FlexContainer } from '../containers';
import { Button } from '../button';
import { List } from '../typography';
import { fontWeightClass, paddingClass, textColorClass } from '../../theme';
import CaptionText from '../typography/CaptionText';

const Dropdown: React.FC<DropdownProps> = ({
  label,
  listDisc = false,
  options,
  placeholder = 'Select an option',
  onContinue,
}) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelection(value);
    setOpen(false);
    onContinue?.(value);
  };

  return (
    <FlexContainer flexDirection="col" width="full" alignItems="center" gap={10}>
      {label && (
        <CaptionText weight="medium" className={textColorClass.black}>
          {label}
        </CaptionText>
      )}

      <Button
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="dropdown-options-list"
        aria-label="Toggle dropdown options"
      >
        <span>{selection ? options.find((o) => o.value === selection)?.label : placeholder}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>

      {open && (
        <FlexContainer justify="center" className={paddingClass.sm}>
          <List
            listDisc={listDisc}
            lists={options}
            renderItem={(option: Option) => {
              const isSelected = selection === option.value;

              const itemClasses = [
                'cursor-pointer',
                fontWeightClass.bold,
                paddingClass.sm,
                isSelected ? 'bg-white text-black' : textColorClass.black,
                'hover:text-white',
                'transition-colors',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <li
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={itemClasses}
                >
                  <span className="flex items-center gap-2">
                    {option.label}
                    {isSelected && <span className="sr-only">(selected)</span>}
                  </span>
                  {isSelected && (
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </li>
              );
            }}
          />
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default Dropdown;
