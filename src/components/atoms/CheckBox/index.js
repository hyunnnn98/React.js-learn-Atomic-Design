import React from 'react';
import classNames from 'classnames';

import styles from './style.module.css';

const CheckBox = ({ className, value, onClick, ...props }) => {
  const classProps = classNames(className, styles['default']);
  const checkAims = classNames(styles['check'], value ? styles['active'] : '');

  const handleClick = event => {
    onClick(event);
  };

  return (
    <div className={classProps} onClick={handleClick} {...props}>
      <div className={checkAims}>
        <div className={styles['check-left']} />
        <div className={styles['check-right']} />
      </div>
    </div>
  );
};

export default CheckBox;
