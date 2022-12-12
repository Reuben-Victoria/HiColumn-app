import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({ src, alt, text1, text2, onClick, link }) {
  return (
    <a href={link}>
      <button className={styles.button} onClick={onClick}>
        <div className={styles.button__buttonIcon}>
          <img src={src} alt={alt} />
        </div>
        <div>
          <p className={styles.button__download}>{text1}</p>
          <p className={styles.button__dbrandName}>{text2}</p>
        </div>
      </button>
    </a>
  );
}

Button.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string
};

export default Button;
