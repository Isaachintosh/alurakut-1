import { ReactNode } from 'react';
import { MenuProvider } from './MenuContext';
import { ModalThemeProvider } from './ModalThemeContext';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <MenuProvider>
      <ModalThemeProvider>{children}</ModalThemeProvider>
    </MenuProvider>
  );
}
