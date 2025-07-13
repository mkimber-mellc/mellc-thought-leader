import {
  bgColorClass,
  marginClass,
  marginXClass,
  marginYClass,
  paddingClass,
  paddingXClass,
  paddingYClass,
} from '../../theme';

export type BaseCardProps = {
  children?: React.ReactNode;
  bg?: keyof typeof bgColorClass | string;
  margin?: keyof typeof marginClass;
  mx?: keyof typeof marginXClass;
  my?: keyof typeof marginYClass;
  padding?: keyof typeof paddingClass | string;
  px?: keyof typeof paddingXClass;
  py?: keyof typeof paddingYClass;
  rounded?: boolean;
  shadow?: boolean;
  shadowColor?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type CardProps = {
  children: React.ReactNode;
  bg?: keyof typeof bgColorClass | string;
  margin?: keyof typeof marginClass;
  mx?: keyof typeof marginXClass;
  my?: keyof typeof marginYClass;
  padding?: keyof typeof paddingClass | string;
  px?: keyof typeof paddingXClass;
  py?: keyof typeof paddingYClass;
  rounded?: boolean;
  shadow?: boolean;
  shadowColor?: string;
  className?: string;
  style?: React.CSSProperties;
};
