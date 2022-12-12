import React from 'react';
import styles from './NewsLetter.module.scss';

function Newsletter() {
  return (
    <div className={styles.newsLetterContainer}>
      <div className={styles.newsLetterContainer__newsLetter}>
        <div>
          <h1>Join Our Newsletter</h1>
          <p>
            We want to share exciting stuff with you so join our mailing list to stay updated
            whenever we drop something new.
          </p>
        </div>
        <div className={styles.newsLetterContainer__newsLetter__divider}></div>
        <form>
          <input type="mail" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
