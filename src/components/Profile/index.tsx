import * as S from './styles';
import { Link } from 'components/Link';

interface ProfileProps {
  githubUser: string;
}

export function Profile({ githubUser }: ProfileProps) {
  return (
    <S.Container as="aside">
      {/* TODO should render placeholder if user is not found */}
      <img src={`https://github.com/${githubUser}.png`} alt="User avatar" />

      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
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
            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/camera.svg`} />
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
            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/logout.svg`} />
            Sair
          </Link>
        </nav>
      </S.Actions>
    </S.Container>
  );
}
