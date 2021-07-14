import communitiesMock from 'mocks/communities.json';
import peopleMock from 'mocks/people.json';
import { FormEvent, useState } from 'react';
import { Card } from 'components/Card';
import { Menu } from 'components/Menu';
import { Profile } from 'components/Profile';
import { ProfileSummary } from 'components/ProfileSummary';
import * as S from './styles';
import { Community } from './types';
import { ListInterests } from 'components/ListInterests';

export function Home() {
  const [communities, setCommunities] = useState<Community[]>(communitiesMock);

  const githubUser = 'brfeitoza';

  function handleAddNewCommunity(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const community = {
      id: `${new Date().toISOString()}-${Math.random()}`,
      title: String(formData.get('title')),
      image: String(formData.get('image')),
    };

    setCommunities((prevState) => [...prevState, community]);
  }

  return (
    <>
      <Menu githubUser={githubUser} />
      <S.Container>
        <div className="profileArea">
          <Profile githubUser={githubUser} />
        </div>

        <div className="welcomeArea">
          <Card>
            <h1>Bem vindo(a)</h1>
            <ProfileSummary />
          </Card>

          <Card>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <form onSubmit={handleAddNewCommunity}>
              <div>
                <input
                  type="text"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button type="submit">Criar comunidade</button>
            </form>
          </Card>
        </div>

        <div className="profileRelationsArea">
          <ListInterests
            title={`Comunidades (${communities.length})`}
            data={communities.map((community) => ({
              key: community.id,
              href: `/users/${community.title}`,
              imageSrc: community.image,
              title: community.title,
            }))}
          />
          <ListInterests
            title={`Pessoas da comunidade (${peopleMock.length})`}
            data={peopleMock.map((pessoa) => ({
              key: pessoa,
              href: `/users/${pessoa}`,
              imageSrc: `https://github.com/${pessoa}.png`,
              title: pessoa,
            }))}
          />
        </div>
      </S.Container>
    </>
  );
}
