import React from 'react';
import Button from '../StoreLinks/Button';
import apple from './assets/Group 1540.svg';
import google from './assets/Group.svg';
import image from './assets/Rectangle 198 (1).svg';
import styles from './Merchant.module.scss';

function Merchant() {
  return (
    <div className={styles.merchantContainer}>
      <div>
        <div className={styles.merchantContainer__merchantLeft}>
          <h3>HICOLUMN MERCHANT</h3>
          <h1>Your online store is just a few clicks away.</h1>
          <p>
            Merchants are given the tool that enables them become an active participant in the
            E-commerce space without having to own a website or have any delivery facility. <br />
            <br />
            Hicolumn by design and operations ensures real comfort and quality convenience. It
            brings complete sense of security and assurance which has been lacking in oline trade
            for so long.
          </p>
        </div>

        <div className={styles.merchantContainer__downloadButtons}>
          <Button src={google} text1="Download on" text2="Google Play" />
          <Button src={apple} text1="Download on the" text2="App Store" />
        </div>
      </div>

      <div className={styles.merchantContainer__headerImage}>
        <div>
          <img src={image} alt="merchant-section-image" />
        </div>
      </div>
    </div>
  );
}

export default Merchant;
