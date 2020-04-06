import React from 'react';
import Time from '../../utils/Time';

function Footer({ lines }: { lines: string[] }) {
  return (
    <div className="meta-info">
      <div>
        {Time.getTheTime()} {Time.getDayType().map(x => x + ', ')}
        {lines && lines.map(line => `${line}, `)}
      </div>
    </div>
  );
}

export default Footer;
