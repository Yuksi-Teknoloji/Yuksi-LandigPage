import React from 'react';

interface IconProps {
  src: string;
  alt?: string;
  className?: string;
  invert?: boolean;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  src,
  alt = '',
  className = '',
  invert = false,
  style,
}) => {
  const filterStyle = invert ? { filter: 'brightness(0) invert(1)' } : {};
  const combinedStyle = { ...filterStyle, ...style };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={combinedStyle}
    />
  );
};
