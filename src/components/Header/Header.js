import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blueLogo from './assets/logo.svg';
import whiteLogo from '../../assets/whiteLogo.svg';
import styles from './Header.module.scss';
import ComponentNavBar from '../ComponentNavBar/ComponentNavBar';
import PropTypes from 'prop-types';

function Header({ blueHeader }) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(true);
  };
  return (
    <header className={blueHeader ? styles.blueNavbar : styles.whiteNavbar}>
      <div>
        <Link to="/">
          <img src={blueHeader ? whiteLogo : blueLogo} alt="logo" />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div>
        <div onClick={handleClick}>
          <i className="fa fa-2x fa-bars" aria-hidden="true"></i>
        </div>
        {toggle && <ComponentNavBar className={toggle ? styles.hideBar : styles.showMenubar} />}
      </div>
    </header>
  );
}

Header.propTypes = {
  blueHeader: PropTypes.bool,
  fontAwesome: PropTypes.bool
};
export default Header;
