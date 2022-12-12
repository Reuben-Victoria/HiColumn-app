import React from 'react';
import Button from '../StoreLinks/Button';
import image1 from './assets/1.svg';
import image2 from './assets/2.svg';
import image3 from './assets/3.svg';
import image4 from './assets/4.svg';
import image5 from './assets/5.svg';
import image6 from './assets/6.svg';
import image7 from './assets/7.svg';
import image8 from './assets/8.svg';
import image9 from './assets/9.svg';
import frame2 from './assets/Frame 2.svg';
import google from '../HeroSection/assets/Group.svg';
import apple from '../HeroSection/assets/Group 1540.svg';

import styles from './Partners.module.scss';

function Partners() {
  return (
    <div className={styles.partnersContainer}>
      <h1 className={styles.partnersContainer__title}>Our Partners</h1>
      <div className={styles.partnersContainer__partnersLogo}>
        <div className="img">
          <img src={image1} alt="Enyata-logo" />
        </div>
        <div className="img">
          <img src={image2} alt="Enyata-logo" />
        </div>
        <div className="img">
          <img src={image3} alt="Enyata-logo" />
        </div>
        <div className="img">
          <img src={image4} alt="Enyata-logo" />
        </div>
        <div className="img">
          <img src={image5} alt="Enyata-logo" />
        </div>
      </div>
      <div className={styles.partnersContainer__partnersLogo}>
        <div className="img">
          <img src={image6} alt="Enyata-logo" />
        </div>
        <div className="img">
          <img src={image7} alt="Enyata-logo" />
        </div>
        <div className="img">
          <img src={image8} alt="Enyata-logo" />
        </div>
        <div className="img">
          <img src={image9} alt="Enyata-logo" />
        </div>
      </div>
      <div className={styles.partnersContainer__shoppers}>
        <div className={styles.partnersContainer__shoppers__frame2}>
          <img src={frame2} />
        </div>
        <div>
          <div className={styles.partnersContainer__shoppers__shoppersText}>
            <h1>Join other smart shoppers</h1>
            <p>
              Ease the stress of traffic congestion, avoid long queues, stay safe and be more
              productive with time while we serve you within 20minuetes after making your orders.
            </p>
          </div>
          <div className={styles.partnersContainer__shoppers__buttons}>
            <Button
              src={google}
              text1="Download on"
              text2="Google Play"
              link="https://play.google.com/"
            />
            <Button
              src={apple}
              text1="Download on"
              text2="App Store"
              link="https://www.apple.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
