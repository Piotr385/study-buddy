import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    overflow: hidden;
  }

  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
