import React from 'react';

// styles
import styled from 'styled-components';
import * as palette from 'assets/styles/palette';

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

const StyledText = styled.p`
  display: block;
  font-size: ${({ size }) => `${size.toString()}px`};
  font-weight: ${({ weight }) => weight || Weight.regular};
  color: ${({ color }) => color || ''};
`;

const Text = ({ size = Size.regular, weight = Weight.regular, color = palette.BLACK, children, className }) => {
  return (
    <StyledText size={size} weight={weight} color={color} className={className}>
      {children}
    </StyledText>
  );
};

export default Text;
