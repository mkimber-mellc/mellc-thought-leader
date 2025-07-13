'use client';

import { useEffect, useState } from 'react';
import {
  bgColorClass,
  textColorClass,
  paddingClass,
  marginClass,
  fontSizeClass,
  fontWeightClass,
  positionClass,
  insetClass,
  zIndexClass,
  heightClass,
  widthClass,
  flexDirectionClass,
} from '../../theme';
import { FlexContainer } from '../containers';
import MobileNav from './MobileNav';
import { MenuIcon, XIcon } from '../icons';
import { SidebarNavProps } from './types-nav';

export default function SidebarNav({
  title = '',
  logo = '',
  logoHref = '/',
  titleHref = '/',
  titleColor = 'black',
  links = [],
  bg = 'white',
  padding = 'md',
  cardBg,
  cardPadding,
  navButton,
  menuContainer,
  linkClass,
  collapsed = false,
  activePath = '',
  ...rest
}: SidebarNavProps) {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  const navClasses = [
    bgColorClass[bg as keyof typeof bgColorClass] || bg,
    paddingClass[padding as keyof typeof paddingClass],
    'min-h-screen',
    'w-64',
    'sticky top-0',
    'flex flex-col justify-between',
    zIndexClass.base,
  ].join(' ');

  const linkBaseClasses = [
    'flex items-center gap-3 px-4 py-2 rounded-lg text-black duration-200',
    fontSizeClass.sm,
    fontWeightClass.medium,
  ];

  return (
    <aside className={`${navClasses} hidden md:flex`} {...rest}>
      <FlexContainer flexDirection="col" gap={2}>
        {logo ? (
          <a href={logoHref}>
            <img src={logo} alt="Logo" className={[heightClass[24], widthClass.auto].join(' ')} />
          </a>
        ) : (
          <a
            href={titleHref}
            className={`${
              textColorClass[(titleColor as keyof typeof textColorClass) || titleColor]
            } ${fontWeightClass.bold} text-center`}
          >
            {title}
          </a>
        )}

        <FlexContainer flexDirection="col" gap={2}>
          {links.map((link) => {
            const isActive = pathname === link.href || activePath === link.href;
            const linkClasses = [
              ...linkBaseClasses,
              isActive ? 'bgaccent text-white' : 'hover:bgprimary hover:textprimary',
            ].join(' ');
            return (
              <a key={link.href} href={link.href} className={linkClasses}>
                {link.icon}
                <span>{link.label}</span>
              </a>
            );
          })}
        </FlexContainer>
      </FlexContainer>
    </aside>
  );
}
