import React from 'react';
import CSS from 'csstype';

const divStyle: CSS.Properties = {
  backgroundColor: 'var(--color-2)',
  color: 'var(--color-3)',
  padding: '0.1em 0 0 0.5em',
  fontVariantCaps: 'all-small-caps',
};

function DepartureHeader({ title }) {
  return (
    <div style={divStyle}>
      <div> {title}</div>
    </div>
  );
}

export default DepartureHeader;
