import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import * as S from './styles';
import nookies from 'nookies';

interface SignInButtonProps {
  githubUser: string;
}

export function SignInButton({ githubUser }: SignInButtonProps) {
  const [session] = useSession();

  function handleSignIn() {
    nookies.set(null, 'GITHUB_USER', githubUser, {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    signIn('github');
  }

  function handleSignOut() {
    signOut();
  }

  return session ? (
    <S.SignInButton type="button" onClick={handleSignOut}>
      <FaGithub />
      {session.user.name}
      <FiX color="#737380" />
    </S.SignInButton>
  ) : (
    <S.SignInButton type="button" onClick={handleSignIn} disabled={!githubUser}>
      <FaGithub />
      Entrar com o GitHub
    </S.SignInButton>
  );
}
