import React from 'react';
import classNames from 'classnames';

import P, { Size, Weight } from '../../atoms/P';

import styles from './style.module.css';

const Header = ({ className }) => {
  const classProps = classNames(className, styles['default']);

  return (
    <div className={classProps}>
      <P text="fist tab" size={Size.extraLarge} className={styles['title']} />
      <P text="second tab" size={Size.extraLarge} weight={Weight.bold} className={styles['name']} />
      <P text="third tab" size={Size.extraLarge} className={styles['title']} />
    </div>
  );
};

export default Header;
