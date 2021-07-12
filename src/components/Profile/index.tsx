import * as S from './styles';

interface ProfileProps {
  githubUser: string;
}

export function Profile({ githubUser }: ProfileProps) {
  return (
    <S.Container>
      <img src={`https://github.com/${githubUser}.png`} alt="Avatar" />
    </S.Container>
  );
}
