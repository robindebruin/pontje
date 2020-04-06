import React from 'react';

interface Props {
  open: boolean;
}

function ArrowToggle({ open }: Props) {
  const isOpen = open ? 'arrow--open' : '';
  return (
    <a className={`arrow ${isOpen}`}>
      <span className={`arrow__bar arrow__bar--left `}></span>
      <span className={`arrow__bar arrow__bar--right `}></span>
    </a>
  );
}

export default ArrowToggle;
