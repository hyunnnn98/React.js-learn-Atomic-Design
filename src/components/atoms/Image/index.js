import React from 'react';
import classNames from 'classnames';

import styles from './style.module.css';

export const Type = {
  background: 'background',
  img: 'img',
};

const Image = ({ className, src, type = Type.img }) => {
  const classProps = classNames(className, styles['default'], styles[type]);

  return type === Type.img ? (
    <img className={classProps} src={src} alt="no img" />
  ) : (
    <div className={classProps} style={{ backgroundImage: `url(${src})` }} />
  );
};

export default Image;
