import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Buttons = ({ text, disabled, theme, type, onClick }) => {
  return (
    <button
      className={classNames(styles.btn, styles[`btn__${theme}`])}
      disabled={disabled}
      type={type}
      onClick={onClick}>
      {text}
    </button>
  );
};

Buttons.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};
export default Buttons;
