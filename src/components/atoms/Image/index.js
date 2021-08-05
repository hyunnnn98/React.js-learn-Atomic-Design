import React from 'react';

export const Type = {
  background: 'background',
  img: 'img',
};

const Image = ({ src, type = Type.img }) => {
  return type === Type.img ? <img src={src} alt="no img" /> : <div style={{ backgroundImage: `url(${src})` }} />;
};

export default Image;
