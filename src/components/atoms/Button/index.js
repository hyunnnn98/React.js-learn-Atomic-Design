import React from 'react';
import classNames from 'classnames';

import styles from './style.module.css';

const Button = ({ className, children, text, onClick, ...props }) => {
  const classProps = classNames(className, styles['default']);

  return (
    <button className={classProps} onClick={onClick} {...props}>
      {text}
      {children}
    </button>
  );
};

export default Button;
