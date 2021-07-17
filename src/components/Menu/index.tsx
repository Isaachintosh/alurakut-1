import { useState } from 'react';
import { Link } from '../Link';
import * as S from './styles';
import menuItems from './items.json';
import { Profile } from 'components/Profile';
import { ModalTheme } from 'components/ModalTheme';
import { useModalTheme } from 'hooks/ModalThemeContext';
import { useMenu } from 'hooks/MenuContext';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

interface MenuProps {
  githubUser: string;
}

export function Menu({ githubUser }: MenuProps) {
  const { isModalThemeOpen, setIsModalThemeOpen } = useModalTheme();
  const { search, setSearch } = useMenu();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  function handleToggleModalTheme() {
    setIsModalThemeOpen((prevState) => !prevState);
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <S.Wrapper>
      <div data-testid="menu-container" className="container">
        <S.Logo
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.svg`}
          alt="Alurakut"
        />

        <nav className="items">
          {menuItems.map((item) => (
            <Link
              key={`key__${item.name.toLocaleLowerCase()}`}
              href={`${item.slug.toLocaleLowerCase()}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href="#" onClick={handleToggleModalTheme}>
            Escolher tema
          </a>
          <a href="#" onClick={handleSignOut}>
            Sair
          </a>

          <div>
            <input
              placeholder="Pesquisar no Alurakut"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </nav>

        <button onClick={handleToggleMenu}>
          {isOpen && (
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/menu-open.svg?v=${process.env.NEXT_PUBLIC_VERSION}`}
              alt="Icon close menu"
            />
          )}
          {!isOpen && (
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/menu-closed.svg?v=${process.env.NEXT_PUBLIC_VERSION}`}
              alt="Icon burger menu"
            />
          )}
        </button>
      </div>

      {isOpen && (
        <S.ProfileMobile isOpen={isOpen}>
          <Profile githubUser={githubUser} />
        </S.ProfileMobile>
      )}

      <ModalTheme isOpen={isModalThemeOpen} />
    </S.Wrapper>
  );
}
