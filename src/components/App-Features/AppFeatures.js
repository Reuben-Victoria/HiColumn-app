import React from 'react';
import store from './assets/store.png';
import flight from './assets/flight.svg';
import bills from './assets/bills.svg';
import search from './assets/search.svg';
import hand from './assets/Hands (1).svg';
import styles from './AppFeatures.module.scss';

function AppFeatures() {
  return (
    <div id="features" className={styles.appFeaturesContainer}>
      <div>
        <h1 className={styles.appFeaturesContainer__title}>App Features</h1>
        <p className={styles.appFeaturesContainer__description}>
          Get the best deals & cash back from your favorite stores near you using the Hicolumn App.
          Sign up now, it’s totally free.
        </p>
        <div className={styles.appFeaturesContainer__featuresContainer}>
          <div className={styles.appFeaturesContainer__featuresContainer__features}>
            <div className={styles.appFeaturesContainer__featuresContainer__features__featuresLogo}>
              <img src={store} alt="Store listings" />
            </div>
            <h2>Store Listings</h2>
            <p>Shop from registered Stores/merchant closest to you.</p>
          </div>
          <div className={styles.appFeaturesContainer__featuresContainer__features}>
            <div className={styles.appFeaturesContainer__featuresContainer__features__featuresLogo}>
              <img src={flight} alt="Flight-booking" />
            </div>
            <h2>Flight Booking</h2>
            <p>
              This contains a list of product available in a particular store/Merchant, and you can
              buy from your trusted store.
            </p>
          </div>
          <div className={styles.appFeaturesContainer__featuresContainer__features}>
            <div className={styles.appFeaturesContainer__featuresContainer__features__featuresLogo}>
              <img src={bills} alt="Bills-payment" />
            </div>
            <h2>Bills Payment</h2>
            <p>
              With Hicolumn you can easily search for a product on a store using the search and
              filter features.
            </p>
          </div>
          <div className={styles.appFeaturesContainer__featuresContainer__features}>
            <div className={styles.appFeaturesContainer__featuresContainer__features__featuresLogo}>
              <img src={search} alt="Flight-booking" />
            </div>
            <h2>Flight Booking</h2>
            <p>Shop from registered Stores/merchant closest to you.</p>
          </div>
        </div>
      </div>

      <div className={styles.appFeaturesContainer__hand}>
        <img src={hand} alt="hand holding a phone" />
      </div>
    </div>
  );
}

export default AppFeatures;
