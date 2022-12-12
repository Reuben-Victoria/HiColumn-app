import React from 'react';
import styles from './AboutUs.module.scss';
import image from '../../assets/whoweare.svg';
function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.about}>
        <h1>About Us</h1>
      </div>
      <div className={styles.container}>
        <div>
          <h1>Who we are</h1>
          <p>
            We are a team passionately focused on driving small business success, Hicolumn is an
            E-commerce platform that connects customer to their choice stores, anywhere and anytime
            and it gives stores/merchants/SMEs whom have existing and verifiable businesses the
            opportunity to become an active participant in the E-commerce ecosystem and while
            ensuring prompt execution of all delivery activities within 20minuts of ordering of
            goods. Hicolumn was designed having in mind the dictates of “Traditional Commerce” and
            with the intention of putting the customers 1st (as was in the old), by connecting the
            customers to their choice Stores and them being able to control and determine where and
            when to buy.
          </p>
        </div>
        <div className={styles.logo}>
          <img src={image} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
