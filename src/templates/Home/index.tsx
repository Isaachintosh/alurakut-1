import peopleMock from 'mocks/people.json';
import { FormEvent, useEffect, useState } from 'react';
import { Card } from 'components/Card';
import { Menu } from 'components/Menu';
import { Profile } from 'components/Profile';
import { ProfileSummary } from 'components/ProfileSummary';
import * as S from './styles';
import { Community, Follower } from './types';
import { ListInterests } from 'components/ListInterests';
import { githubApi } from 'services/githubApi';
import { api } from 'services/api';
import { useMenu } from 'hooks/MenuContext';
import { debounce } from 'utils/debounce';

export function Home() {
  const { search } = useMenu();

  const [followers, setFollowers] = useState<Follower[]>([]);
  const [followersFiltered, setFollowersFiltered] = useState<Follower[]>([]);

  const [communities, setCommunities] = useState<Community[]>([]);
  const [communitiesFiltered, setCommunitiesFiltered] = useState<Community[]>(
    []
  );

  const [createCommunityButtonText, setCreateCommunityButtonText] =
    useState('Criar comunidade');

  const githubUser = 'brfeitoza';

  useEffect(() => {
    githubApi.get(`users/${githubUser}/followers`).then((response) => {
      setFollowers(response.data);
      setFollowersFiltered(response.data);
    });

    api.get('communities').then((response) => {
      setCommunities(response.data.allCommunities);
      setCommunitiesFiltered(response.data.allCommunities);
    });
  }, []);

  function handleFilterFollowers() {
    if (!search) {
      setFollowersFiltered([...followers]);
      return;
    }

    const filteredFollowers = [];
    followers.forEach((follower) => {
      if (follower.login.includes(search)) {
        filteredFollowers.push(follower);
      }
    });
    setFollowersFiltered([...filteredFollowers]);
  }

  function handleFilterCommunities() {
    if (!search) {
      setCommunitiesFiltered([...communities]);
      return;
    }

    const filteredCommunities = [];
    communities.forEach((community) => {
      if (community.title.includes(search)) {
        filteredCommunities.push(community);
      }
    });
    setCommunitiesFiltered([...filteredCommunities]);
  }

  useEffect(() => {
    debounce(() => {
      handleFilterFollowers();
      handleFilterCommunities();
    }, 500);
  }, [search]);

  async function handleAddNewCommunity(e: FormEvent) {
    e.preventDefault();
    setCreateCommunityButtonText('Carregando...');

    const formData = new FormData(e.target as HTMLFormElement);

    const community = {
      id: `${new Date().toISOString()}-${Math.random()}`,
      title: String(formData.get('title')),
      imageUrl: String(formData.get('image')),
      creatorSlug: githubUser,
    };

    const response = await api.post('create-community', community);
    setCreateCommunityButtonText('Criar comunidade');

    setCommunities((prevState) => [...prevState, response.data.newCommunity]);
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

              <button type="submit">{createCommunityButtonText}</button>
            </form>
          </Card>
        </div>

        <div className="profileRelationsArea">
          <ListInterests
            title={`Seguidores (${followers.length})`}
            data={followersFiltered.map((follower) => ({
              key: String(follower.id),
              href: follower.html_url,
              imageSrc: follower.avatar_url,
              title: follower.login,
            }))}
            target="_blank"
          />
          <ListInterests
            title={`Comunidades (${communities.length})`}
            data={communitiesFiltered.map((community) => ({
              key: community.id,
              href: `/communities/${community.id}`,
              imageSrc: community.imageUrl,
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
