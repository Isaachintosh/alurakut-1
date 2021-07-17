import { AppProps } from 'next/app';
import { AppProvider } from 'hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppProvider pageProps={pageProps}>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </>
  );
}
