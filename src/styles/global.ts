import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.blue[100]};
    background-repeat: no-repeat;
    background-size: cover;
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

  a, button {
    cursor: pointer;
    transition: 0.3s;
    outline: 0;

    &:hover, &:focus {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;

      &:hover {
        filter: none;
      }
    }
  }

  input {
    transition: 0.3s;
    outline: 0;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover, &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }

  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    z-index: 102;
  }
`;
