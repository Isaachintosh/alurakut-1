import { ModalThemeProvider } from 'hooks/ModalThemeContext';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ModalThemeProvider>
          <Component {...pageProps} />
        </ModalThemeProvider>
      </ThemeProvider>
    </>
  );
}
