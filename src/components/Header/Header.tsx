import React from 'react';
import { Link } from 'react-router-dom';
import Back from './../Back';

function Header() {
  return (
    <header className="header">
      <Link to={'/'}>Home</Link>
      <Back></Back>
    </header>
  );
}

export default Header;
