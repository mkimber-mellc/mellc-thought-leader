import React from 'react';
import { bgColorClass, marginClass, paddingClass, textColorClass } from '../../theme';

import { BaseContainerProps } from '../../components';

import { BaseCardProps } from '../card/types-cards';

export type NavLinksProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export type NavBarProps = {
  children?: React.ReactNode;
  bg?: keyof typeof bgColorClass | string;
  color?: keyof typeof textColorClass | string;
  padding?: keyof typeof paddingClass | string;
  margin?: keyof typeof marginClass;
  title?: string;
  titleHref?: string;
  logo?: string;
  logoHref?: string;
  links?: NavLinksProps[];
  navButtonClass?: string;
  menuContainerProps?: BaseContainerProps;
  linkClass?: string;
  cardProps?: BaseCardProps;
} & React.HTMLAttributes<HTMLElement>;

export interface MobileNavProps {
  links: { label: string; href: string }[];
  navButtonClass?: string;
  menuContainerProps?: BaseContainerProps;
  linkClass?: string;
  cardProps?: BaseCardProps;
  className?: string;
}

export type SidebarNavProps = {
  links?: NavLinksProps[];
  bg?: keyof typeof bgColorClass | string;
  padding?: keyof typeof paddingClass | string;
  cardBg?: string;
  cardPadding?: string;
  logo?: string;
  logoHref?: string;
  title?: string;
  titleHref?: string;
  titleColor?: keyof typeof textColorClass | string;
  navButton?: string;
  menuContainer?: string;
  linkClass?: string;
  activePath?: string;
  collapsed?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
