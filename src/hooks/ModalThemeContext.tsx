import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ModalThemeProviderProps {
  children: ReactNode;
}

interface ModalThemeData {
  isModalThemeOpen: boolean;
  setIsModalThemeOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalThemeContext = createContext({} as ModalThemeData);

export function ModalThemeProvider({ children }: ModalThemeProviderProps) {
  const [isModalThemeOpen, setIsModalThemeOpen] = useState(false);

  return (
    <ModalThemeContext.Provider
      value={{ isModalThemeOpen, setIsModalThemeOpen }}
    >
      {children}
    </ModalThemeContext.Provider>
  );
}

export function useModalTheme() {
  return useContext(ModalThemeContext);
}
