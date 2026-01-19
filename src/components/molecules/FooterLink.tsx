import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  className = '',
}) => {
  return (
    <Link
      to={href}
      className={`flex items-center hover:opacity-80 active:opacity-70 transition-opacity text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] font-medium justify-center lg:justify-start py-2 lg:py-0 -mx-2 px-2 lg:mx-0 lg:px-0 rounded-md lg:rounded-none ${className}`}
      style={{ fontFamily: 'Roboto' }}
    >
      <span>{children}</span>
    </Link>
  );
};
