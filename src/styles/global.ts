import { createGlobalStyle } from 'styled-components';
import { AlurakutStyles } from 'lib/AlurakutCommons';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.blue[100]};
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    z-index: 102;
  }

  ${AlurakutStyles}
`;
