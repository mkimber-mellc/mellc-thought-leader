'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MobileNavProps } from './types-nav';
import { BlockContainer, Card, FlexContainer, MenuIcon, XIcon } from '../../components';

export default function MobileNav({
  links = [],
  navButtonClass = 'px-3 py-2 font-bold',
  menuContainerProps,
  cardProps,
  linkClass = 'text-sm rounded-lg w-full text-center font-bold',
  className,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <BlockContainer responsiveDisplay={{ md: 'hidden' }} className={className}>
      <button type="button" onClick={() => setOpen(!open)} className={navButtonClass}>
        {open ? <XIcon /> : <MenuIcon />}
      </button>

      {open && (
        <FlexContainer
          flexDirection="col"
          alignItems="center"
          gap={5}
          padding="md"
          position="absolute"
          zIndex="tooltip"
          className="left-0 right-0"
          {...menuContainerProps}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Card key={link.href} padding="md" className="flex justify-center" {...cardProps}>
                <a
                  href={link.href}
                  className={`${linkClass} ${isActive ? 'text-blue-500 underline' : ''}`}
                >
                  {link.label}
                </a>
              </Card>
            );
          })}
        </FlexContainer>
      )}
    </BlockContainer>
  );
}
