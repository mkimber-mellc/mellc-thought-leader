import { UILinkProps } from './types-links';

export default function UILink({
  href = '#',
  children,
  isExternal = false,
  className,
  ...props
}: UILinkProps) {
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : props.target}
      rel={isExternal ? 'noopener noreferrer' : props.rel}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
