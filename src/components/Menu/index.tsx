import { useContext, useState } from 'react';
import { Link } from '../Link';
import * as S from './styles';
import menuItems from './items.json';
import { Profile } from 'components/Profile';
import { ModalTheme } from 'components/ModalTheme';
import { ModalContext } from 'contexts/ModalContext';

interface MenuProps {
  githubUser: string;
}

export function Menu({ githubUser }: MenuProps) {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  function handleToggleModal() {
    setIsModalOpen((prevState) => !prevState);
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
          <a href="#" onClick={handleToggleModal}>
            Escolher tema
          </a>
          <Link href="/logout">Sair</Link>

          <div>
            <input placeholder="Pesquisar no Alurakut" />
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

      <ModalTheme isOpen={isModalOpen} />
    </S.Wrapper>
  );
}
