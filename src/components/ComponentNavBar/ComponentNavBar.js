import React from 'react';
import { Link } from 'react-router-dom';
import close from './close.svg';
import styles from './ComponentNavbar.module.scss';
import PropTypes from 'prop-types';
function ComponentNavBar({ setToggle, toggle }) {
  return (
    <div className={toggle ? styles.drawer : styles.hideDrawer}>
      <div className={styles.drawer__overlay} onClick={() => setToggle(!toggle)}></div>
      <div className={styles.drawer__sidebar}>
        <div className={styles.drawer__navbar}>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About Us</Link>
          </p>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
        <div onClick={() => setToggle(!toggle)}>
          <img src={close} alt="close tag" />
        </div>
      </div>
    </div>
  );
}
export default ComponentNavBar;

ComponentNavBar.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.any
};
