import { useState } from 'react';
import { Link } from '../Link';
import * as S from './styles';
import menuItems from './items.json';
import { Profile } from 'components/Profile';

interface MenuProps {
  githubUser: string;
}

export function Menu({ githubUser }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
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
          <Link href="/logout">Sair</Link>

          <div>
            <input placeholder="Pesquisar no Alurakut" />
          </div>
        </nav>

        <button onClick={toggleMenu}>
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
    </S.Wrapper>
  );
}
