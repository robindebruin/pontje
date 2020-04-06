import React, { ReactNode } from 'react';

interface ButtonProps {
  active?: boolean;
  className?: string;
  children?: ReactNode;
}

function Button({ active = false, className, children }: ButtonProps) {
  const isActive = active && 'btn__selected';

  return <div className={`btn ${isActive} ${className}`}>{children}</div>;
}

export default Button;
