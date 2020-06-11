import React from 'react';
import CSS from 'csstype';

const divStyle: CSS.Properties = {
  backgroundColor: 'var(--color-1)',
  color: 'var(--color-3)',
  padding: '0 0 0 0.5em',
  fontVariantCaps: 'all-small-caps',
  fontSize: '20px',
};

function DestinationHeader({ title }) {
  return (
    <div style={divStyle}>
      <div> {title}</div>
    </div>
  );
}

export default DestinationHeader;
