import React from 'react';
import styles from './Footer.module.scss';
import image from './assets/Group 19.svg';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import linkedIn from './assets/linkedIn.svg';
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__footerTop}>
        <div className={styles.footer__footerTop__left}>
          <div>
            <img src={image} alt="HiColumn-logo" />
          </div>
          <span>Hicolumn</span>
          <p>
            2 Kudirat Abiola way, First bank bus stop, Oregun, Ikeja, Lagos,<br></br> Nigeria.
          </p>
        </div>
        <div>
          <h1>QUICK LINKS</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>LEGALS</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className={styles.footerTop__contacts}>
          <h1>CONTACT US</h1>
          <ul>
            <li>
              <a href="tel:07089135748">+234 [0] 708 913 5748 </a>
            </li>
            <li>
              <a href="mailto:reubenvickie20@gmail.com">reubenvickie20@gmail</a>
            </li>
            <li>Follow us</li>
          </ul>
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="facebook-icon" />
          </a>
          <a href="https://www.twitter.com/">
            <img src={twitter} alt="twitter-icon" />
          </a>
          <a href="https://linkedIn.com/">
            <img src={linkedIn} alt="linkedIn-icon" />
          </a>
        </div>
      </div>
      <hr />
      <div className={styles.footerBottom}>
        <p>Copyright © 2021 Hicolumn - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
