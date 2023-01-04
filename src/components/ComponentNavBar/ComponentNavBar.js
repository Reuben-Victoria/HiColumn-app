import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ComponentNavbar.module.scss';
function ComponentNavBar() {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawer__overlay}></div>
      <div className={styles.drawer__sidebar}>
        <div className={styles.drawer__navbar}>
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/about">About Us</Link>
          </a>
          <a>
            <Link to="/contact">Contact Us</Link>
          </a>
        </div>
        <div>
          <iconify-icon icon="pajamas:close" style="color: #0b2253;"></iconify-icon>
        </div>
      </div>
    </div>
  );
}
export default ComponentNavBar;
