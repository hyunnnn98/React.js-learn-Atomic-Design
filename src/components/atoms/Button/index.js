import React from 'react';

// styles
import styled from 'styled-components';
import * as palette from 'assets/styles/palette';

const setButtonColor = disabled => {
  switch (disabled) {
    case true:
      return palette.ACTIVE_YELLOW;
    case false:
      return palette.DISABLED_YELLOW;
    default:
      return palette.WHITE;
  }
};

const StyledButton = styled.button`
  display: block;
  width: 344px;
  height: 40px;
  filter: drop-shadow(3px 3px 10px rgba(0, 0, 0, 0.25));
  outline: none;
  border-radius: 10px;
  border: none;
  background-color: ${props => setButtonColor(props.disabled)};
  color: ${palette.GRAY_DARK};
  font-size: 18px;
  ${props => (props.disabled ? '' : 'cursor: pointer;')}
`;

const Button = ({ disabled, children, onClickButton }) => {
  return (
    <StyledButton
      type="button"
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onClickButton();
        }
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
