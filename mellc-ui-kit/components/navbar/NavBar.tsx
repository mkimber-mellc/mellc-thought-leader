'use client';

import React, { useEffect, useState } from 'react';
import { NavBarProps } from './types-nav';
import { bgColorClass, textColorClass } from '../../theme/colors';
import { paddingClass } from '../../theme/padding';
import { marginClass } from '../../theme/margin';
import { fontSizeClass, fontWeightClass } from '../../theme/typography';
import { positionClass, insetClass } from '../../theme/position';
import { zIndexClass } from '../../theme/zIndex';
import { heightClass, widthClass } from '../../theme/spacing';
import { FlexContainer } from '../containers';
import MobileNav from './MobileNav';
import { NavLinksProps } from './types-nav';

const NavBar: React.FC<NavBarProps> = ({
  children,
  bg,
  color,
  padding,
  margin,
  title = '',
  logo = '',
  titleHref = '/',
  logoHref = '#',
  links,
  navButtonClass,
  menuContainerProps,
  linkClass,
  cardProps,
  ...rest
}) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  const navClasses = [
    bgColorClass[bg as keyof typeof bgColorClass] || bg,
    textColorClass[color as keyof typeof textColorClass] || color,
    paddingClass[padding as keyof typeof paddingClass] || padding,
    margin && marginClass[margin],
    positionClass.sticky,
    `top-${insetClass[0]}`,
    `left-${insetClass[0]}`,
    `right-${insetClass[0]}`,
    zIndexClass.tooltip,
  ].join(' ');

  const titleClasses = [fontSizeClass.body, fontWeightClass.bold].join(' ');

  const desktopNavClasses = ['pr-5', 'gap-5'].join(' ');

  const linkBaseClasses = [fontSizeClass.sm, fontWeightClass.medium];

  return (
    <nav className={navClasses} {...rest}>
      <FlexContainer alignItems="center" justify="between">
        <FlexContainer className={titleClasses} alignItems="center" gap={2}>
          {logo && (
            <a href={logoHref}>
              <img src={logo} alt="Logo" className={[heightClass[12], widthClass.auto].join(' ')} />
            </a>
          )}

          {title && (
            <a href={titleHref} className={textColorClass[color as keyof typeof textColorClass]}>
              {title}
            </a>
          )}
        </FlexContainer>

        <FlexContainer
          responsiveDisplay={{ base: 'hidden', md: 'flex' }}
          className={desktopNavClasses}
          justify="center"
        >
          {links?.map((link: NavLinksProps) => {
            const isActive = pathname === link.href;
            const classes = [
              ...linkBaseClasses,
              textColorClass[color as keyof typeof textColorClass],
              isActive ? 'font-bold underline text-blue-700' : '',
            ].join(' ');
            return (
              <a key={link.href} href={link.href} className={classes}>
                {link.label}
              </a>
            );
          })}
        </FlexContainer>

        <MobileNav
          links={links || []}
          navButtonClass={navButtonClass}
          menuContainerProps={menuContainerProps}
          linkClass={linkClass}
          cardProps={cardProps}
        />
      </FlexContainer>
      {children}
    </nav>
  );
};

export default NavBar;
