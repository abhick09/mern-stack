import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';

export const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="ul-tag">
        <li>
          <Link to="/" className="li-tag">
            ||Home|
          </Link>
        </li>
        <li>
          <Link to="/articlelist" className="li-tag">
            |Blogs||
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
