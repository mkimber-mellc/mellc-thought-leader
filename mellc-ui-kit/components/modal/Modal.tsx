'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  bgColorClass,
  fontSizeClass,
  fontWeightClass,
  paddingClass,
  marginClass,
  borderRadiusClass,
  shadowClass,
  textColorClass,
  hoverClass,
} from '../../theme';
import { Button } from '../button';
import { buttonVariantClass } from '../button/buttonVariant';
import { ModalProps } from './types-modal';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className = '' }) => {
  const originalOverflow = useRef<string>(document.body.style.overflow);

  useEffect(() => {
    if (isOpen) {
      originalOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow.current;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContainerClasses = [
    bgColorClass.white,
    borderRadiusClass.xl,
    shadowClass.lg,
    paddingClass.lg,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const titleClasses = [
    fontSizeClass.xl,
    fontWeightClass.bold,
    marginClass.sm,
    textColorClass.black,
  ]
    .filter(Boolean)
    .join(' ');

  const closeButtonClasses = [
    borderRadiusClass.md,
    paddingClass.sm,
    marginClass.md,
    hoverClass.opacity,
    'transition',
  ]
    .filter(Boolean)
    .join(' ');

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div style={{ width: '90%', maxWidth: '28rem' }} className={modalContainerClasses}>
        {title && <h2 className={titleClasses}>{title}</h2>}
        <div>{children}</div>
        <Button onClick={onClose} className={`${buttonVariantClass.softresp} ${closeButtonClasses}`}>
          Close
        </Button>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
