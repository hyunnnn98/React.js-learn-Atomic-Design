import React from 'react';
import classNames from 'classnames';

export const Size = {
  small: 14,
  regular: 16,
  large: 20,
  extraLarge: 30,
};

export const Weight = {
  regular: 400,
  bold: 700,
  extraBold: 800,
};

const P = ({ className, text, size = Size.regular, weight = Weight.regular, ...props }) => {
  const classProps = classNames(className);
  const style = {
    fontSize: size,
    fontWeight: weight,
  };

  return (
    <p className={classProps} style={style} {...props}>
      {text}
    </p>
  );
};

export default P;
