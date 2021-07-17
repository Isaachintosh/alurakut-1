import { ReactNode } from 'react';
import { MenuProvider } from './MenuContext';
import { ModalThemeProvider } from './ModalThemeContext';
import { Provider } from 'next-auth/client';

interface AppProviderProps {
  children: ReactNode;
  pageProps: any;
}

export function AppProvider({ children, pageProps }: AppProviderProps) {
  return (
    <Provider session={pageProps.session}>
      <MenuProvider>
        <ModalThemeProvider>{children}</ModalThemeProvider>
      </MenuProvider>
    </Provider>
  );
}
