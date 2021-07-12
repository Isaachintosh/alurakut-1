import { useState } from 'react';
import { Link } from '../Link';
import { MenuProfileSidebar } from '../MenuProfileSidebar';
import * as S from './styles';

interface MenuProps {
  githubUser: string;
}

export function Menu({ githubUser }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuActions = [
    { name: 'Inicio', slug: '/' },
    { name: 'Amigos', slug: '/amigos' },
    { name: 'Comunidades', slug: '/comunidades' },
  ];

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <S.Wrapper>
      <div className="container">
        <S.Logo src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.svg`} />

        <nav className="actions">
          {menuActions.map((menuItem) => (
            <Link
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
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
            />
          )}
          {!isOpen && (
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/menu-closed.svg?v=${process.env.NEXT_PUBLIC_VERSION}`}
            />
          )}
        </button>
      </div>

      <MenuProfileSidebar githubUser={githubUser} isOpen={isOpen} />
    </S.Wrapper>
  );
}
