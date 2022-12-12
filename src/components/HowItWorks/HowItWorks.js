import React from 'react';
import shop from './assets/shops 1.svg';
import delivery from './assets/Group 30911.svg';
import buyers from './assets/Group 30862.svg';
import play from './assets/Group 30906.svg';
import styles from './HowItWorks.module.scss';
function HowItWorks() {
  return (
    <div className={styles.howItWorks}>
      <h1 className={styles.howItWorks__title}>How It Works</h1>
      <p className={styles.howItWorks__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tortor, pellentesque donec ut
        accumsan nibh turpis massa facilisis pellentesque amet.
      </p>
      <div className={styles.containerWorks}>
        <div className={styles.container}>
          <div className={styles.containerWorks__image}>
            <img src={shop} alt="shop" />
          </div>
          <h1>Create store & list your product</h1>
          <p>
            Download the app and create your store by entering store details. turpis eu massa,
            consectetur adipiscing tortor benelit.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.containerWorks__image}>
            <img src={delivery} alt="delivery" />
          </div>
          <h1>Add your community delivery partner</h1>
          <p>
            Create your products, set your own prices, and make them available for purchase.
            accumsan nibh turpis eu massa, consectetur adipiscing tortor benelit.
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.containerWorks__image}>
            <img src={buyers} alt="buyers" />
          </div>
          <h1>Sell with ease to buyers online</h1>
          <p>
            Manage your orders, choose your own shipping method, and receive sales proceeds.
            accumsan nibh turpis eu massa, consectetur adipiscing tortor benelit.
          </p>
        </div>
      </div>

      <div className={styles.howItWorks__play}>
        <img src={play} alt="players" />
      </div>
    </div>
  );
}

export default HowItWorks;
