import * as S from './styles';
import { Link } from 'components/Link';
import { signOut } from 'next-auth/client';

interface ProfileProps {
  githubUser: string;
}

export function Profile({ githubUser }: ProfileProps) {
  function onImageError(key: string) {
    const imageError = document.getElementById(key) as HTMLImageElement;
    if (imageError) imageError.src = 'https://via.placeholder.com/150';
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <S.Container as="aside">
      <img
        id="user-avatar"
        src={`https://github.com/${githubUser}.png`}
        alt="User avatar"
        onError={() => onImageError('user-avatar')}
      />

      <hr />

      <p>
        <a
          className="boxLink"
          href={`https://github.com/${githubUser}`}
          target="_blank"
        >
          @{githubUser}
        </a>
      </p>

      <hr />

      <S.Actions>
        <nav>
          <Link href="/profile">
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
          <a href="#" onClick={handleSignOut}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/logout.svg`} />
            Sair
          </a>
        </nav>
      </S.Actions>
    </S.Container>
  );
}
