import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset} 
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  *,
	*:before,
	*:after {
	  box-sizing: border-box;
  }
  
  body {
		font-family: 'Noto Sans JP', sans-serif;
  }
`;
