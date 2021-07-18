import { Card } from 'components/Card';
import { ListInterests } from 'components/ListInterests';
import { Menu } from 'components/Menu';
import { Profile as ProfileComponent } from 'components/Profile';
import { ProfileSummary } from 'components/ProfileSummary';
import { useMenu } from 'hooks/MenuContext';
import peopleMock from 'mocks/people.json';
import { useEffect, useState } from 'react';
import { api } from 'services/api';
import { githubApi } from 'services/githubApi';
import { debounce } from 'utils/debounce';
import * as S from './styles';
import { Community, Follower, ProfileInfo } from './types';
import nookies from 'nookies';

export function Profile() {
  const { search } = useMenu();

  const [githubUser, setGithubUser] = useState('');

  const [followers, setFollowers] = useState<Follower[]>([]);
  const [followersFiltered, setFollowersFiltered] = useState<Follower[]>([]);

  const [communities, setCommunities] = useState<Community[]>([]);
  const [communitiesFiltered, setCommunitiesFiltered] = useState<Community[]>(
    []
  );

  const [profileInfo, setProfileInfo] = useState<ProfileInfo>(
    {} as ProfileInfo
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [communityPeopleFiltered, setCommunityPeopleFiltered] =
    useState<string[]>(peopleMock);

  useEffect(() => {
    const user = nookies.get(null).GITHUB_USER;
    if (user) setGithubUser(user);

    const theme = nookies.get(null)[`${user}_THEME`];
    if (theme) {
      document.body.style.backgroundImage = theme;
    }

    Promise.all([
      githubApi.get(`users/${user}`),
      githubApi.get(`users/${user}/followers`),
      api.get('communities'),
    ])
      .then(([responseGithubData, responseFollowers, responseCommunities]) => {
        setProfileInfo({ ...responseGithubData.data });

        setFollowers(responseFollowers.data);
        setFollowersFiltered(responseFollowers.data);

        setCommunities(responseCommunities.data.allCommunities);
        setCommunitiesFiltered(responseCommunities.data.allCommunities);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleFilterFollowers() {
    const filteredFollowers = followers.filter((follower) =>
      follower.login.toLowerCase().includes(search.toLowerCase())
    );
    setFollowersFiltered([...filteredFollowers]);
  }

  function handleFilterCommunities() {
    const filteredCommunities = communities.filter((community) =>
      community.title.toLowerCase().includes(search.toLowerCase())
    );
    setCommunitiesFiltered([...filteredCommunities]);
  }

  function handleFilterCommunityPeople() {
    const filteredCommunityPeople = peopleMock.filter((people) =>
      people.toLowerCase().includes(search.toLowerCase())
    );
    setCommunityPeopleFiltered([...filteredCommunityPeople]);
  }

  useEffect(() => {
    debounce(() => {
      if (!followers.length || !communities.length) {
        return;
      }

      if (!search) {
        setFollowersFiltered([...followers]);
        setCommunitiesFiltered([...communities]);
        setCommunityPeopleFiltered([...peopleMock]);
        return;
      }

      handleFilterFollowers();
      handleFilterCommunities();
      handleFilterCommunityPeople();
    }, 500);
  }, [search]);

  return (
    <>
      <Menu githubUser={githubUser} />
      <S.Container>
        <div className="profileArea">
          <ProfileComponent githubUser={githubUser} />
        </div>

        <div className="welcomeArea">
          <Card>
            <h1>{loading ? 'Carregando...' : profileInfo.name}</h1>
            <ProfileSummary />
          </Card>

          <Card>
            <S.ProfileInfoList>
              {loading ? (
                <li>Carregando...</li>
              ) : (
                Object.entries(profileInfo).map(([key, value]) => {
                  return (
                    !!value && (
                      <li key={key}>
                        <span>
                          {key}: {value}
                        </span>
                      </li>
                    )
                  );
                })
              )}
            </S.ProfileInfoList>
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
            loading={loading}
            error={error}
          />
          <ListInterests
            title={`Comunidades (${communities.length})`}
            data={communitiesFiltered.map((community) => ({
              key: community.id,
              href: `/communities/${community.id}`,
              imageSrc: community.imageUrl,
              title: community.title,
            }))}
            loading={loading}
            error={error}
          />
          <ListInterests
            title={`Pessoas da comunidade (${peopleMock.length})`}
            data={communityPeopleFiltered.map((pessoa) => ({
              key: `${Date.now().toString()}-${Math.random}-${pessoa}`,
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
