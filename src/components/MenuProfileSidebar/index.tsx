import { Link } from '../Link';
import * as S from './styles';

interface MenuProfileSidebarProps {
  githubUser: string;
  isOpen: boolean;
}

export function MenuProfileSidebar({
  githubUser,
  isOpen,
}: MenuProfileSidebarProps) {
  return (
    <S.Container id="menuProfileSidebar" isOpen={isOpen}>
      <div>
        <img src={`https://github.com/${githubUser}.png`} />

        <hr />

        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>

        <hr />

        <S.Actions>
          <nav>
            <Link href="/">
              <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/user.svg`} />
              Perfil
            </Link>
            <Link href="/">
              <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/book.svg`} />
              Recados
            </Link>
            <Link href="/">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/camera.svg`}
              />
              Fotos
            </Link>
            <Link href="/">
              <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/sun.svg`} />
              Depoimentos
            </Link>
          </nav>

          <hr />

          <nav>
            <Link href="/">
              <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/plus.svg`} />
              GitHub Trends
            </Link>
            <Link href="/logout">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/logout.svg`}
              />
              Sair
            </Link>
          </nav>
        </S.Actions>
      </div>
    </S.Container>
  );
}
