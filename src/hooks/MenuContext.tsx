import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface MenuProviderProps {
  children: ReactNode;
}

interface MenuData {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const MenuContext = createContext({} as MenuData);

export function MenuProvider({ children }: MenuProviderProps) {
  const [search, setSearch] = useState('');

  return (
    <MenuContext.Provider value={{ search, setSearch }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
