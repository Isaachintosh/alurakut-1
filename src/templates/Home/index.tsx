import { Card } from '../../components/Card';
import { Profile } from '../../components/Profile';
import { Menu } from '../../components/Menu';
import { ProfileSummary } from '../../components/ProfileSummary';
import * as S from './styles';

export function Home() {
  const githubUser = 'brfeitoza';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

  return (
    <>
      <Menu githubUser={githubUser} />
      <S.Container>
        <div className="profileArea" style={{ gridArea: '' }}>
          <Profile githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Card>
            <h1>Bem vindo(a)</h1>
            <ProfileSummary />
          </Card>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <S.ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((pessoa) => (
                <li key={pessoa}>
                  <a href={`/users/${pessoa}`}>
                    <img src={`https://github.com/${pessoa}.png`} />
                    <span>{pessoa}</span>
                  </a>
                </li>
              ))}
            </ul>
          </S.ProfileRelationsBoxWrapper>
        </div>
      </S.Container>
    </>
  );
}
