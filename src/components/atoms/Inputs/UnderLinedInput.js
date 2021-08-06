import React from 'react';

// styles
import styled from 'styled-components';
import * as palette from 'assets/styles/palette';

const StyledUnderLinedInput = styled.input`
  padding: 5px;
  border: 0px;
  border-bottom: 1px solid ${palette.BLUE_3};
`;

const UnderLinedInput = ({ value = '', placeholder = '', onChange = undefined, maxLength, valid = true }) => {
  return (
    <StyledUnderLinedInput type="text" value={value} placeholder={placeholder} onChange={onChange} valid={valid} />
  );
};

export default UnderLinedInput;
