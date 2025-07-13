import React from 'react';
import { UIImageProps } from './types-image';

export default function UIImage({
  src,
  alt,
  className = '',
  ...props
}: UIImageProps): React.ReactElement {
  const combinedClass = ['object-cover', className].filter(Boolean).join(' ');

  return <img src={src} alt={alt} className={combinedClass} loading="lazy" {...props} />;
}
