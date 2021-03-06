import { Card } from 'components/Card';
import { ListInterests } from 'components/ListInterests';
import { Menu } from 'components/Menu';
import { Profile } from 'components/Profile';
import { ProfileSummary } from 'components/ProfileSummary';
import { useMenu } from 'hooks/MenuContext';
import peopleMock from 'mocks/people.json';
import { FormEvent, useEffect, useState } from 'react';
import { api } from 'services/api';
import { githubApi } from 'services/githubApi';
import { debounce } from 'utils/debounce';
import * as S from './styles';
import { Community, Follower, Message } from './types';
import nookies from 'nookies';
import { ListMessages } from 'components/ListMessages';
import * as yup from 'yup';

export function Home() {
  const { search } = useMenu();

  const [githubUser, setGithubUser] = useState('');

  const [followers, setFollowers] = useState<Follower[]>([]);
  const [followersFiltered, setFollowersFiltered] = useState<Follower[]>([]);

  const [communities, setCommunities] = useState<Community[]>([]);
  const [communitiesFiltered, setCommunitiesFiltered] = useState<Community[]>(
    []
  );
  const [isCommunityInvalid, setIsCommunityInvalid] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [isMessageInvalid, setIsMessageInvalid] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [communityPeopleFiltered, setCommunityPeopleFiltered] =
    useState<string[]>(peopleMock);

  const [createCommunityButtonText, setCreateCommunityButtonText] =
    useState('Criar comunidade');
  const [createMessageButtonText, setCreateMessageButtonText] =
    useState('Deixar recado');

  const [whatToDo, setWhatToDo] = useState<'message' | 'community'>('message');

  useEffect(() => {
    const user = nookies.get(null).GITHUB_USER;
    if (user) setGithubUser(user);

    const theme = nookies.get(null)[`${user}_THEME`];
    if (theme) {
      document.body.style.backgroundImage = theme;
    }

    Promise.all([
      githubApi.get(`users/${user}/followers`),
      api.get('communities'),
      api.get('messages'),
    ])
      .then(([responseFollowers, responseCommunities, responseMessages]) => {
        setFollowers(responseFollowers.data);
        setFollowersFiltered(responseFollowers.data);

        setCommunities(responseCommunities.data.allCommunities);
        setCommunitiesFiltered(responseCommunities.data.allCommunities);

        setMessages(responseMessages.data.allMessages);
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

  async function handleAddNewCommunity(e: FormEvent) {
    e.preventDefault();
    setCreateCommunityButtonText('Carregando...');

    try {
      const schema = yup.object().shape({
        title: yup.string().required().max(20),
        image: yup.string().required().max(200),
      });

      const formData = new FormData(e.target as HTMLFormElement);

      const community = {
        title: String(formData.get('title')),
        imageUrl: String(formData.get('image')),
        creatorSlug: githubUser,
      };

      const isValid = await schema.isValid(community);
      if (!isValid) {
        setIsCommunityInvalid(true);
        return;
      }

      const response = await api.post('create-community', community);

      setCommunities((prevState) => [...prevState, response.data.newCommunity]);
    } catch {
      setIsCommunityInvalid(true);
    } finally {
      setCreateCommunityButtonText('Criar comunidade');
    }
  }

  async function handleAddNewMessage(e: FormEvent) {
    e.preventDefault();
    setCreateMessageButtonText('Carregando...');
    setIsMessageInvalid(false);

    try {
      const schema = yup.object().shape({
        creatorSlug: yup.string().required().max(20),
        message: yup.string().required().max(200),
      });

      const formData = new FormData(e.target as HTMLFormElement);

      const message = {
        creatorSlug: String(formData.get('creatorSlug')),
        message: String(formData.get('message')),
      };

      const isValid = await schema.isValid(message);
      if (!isValid) {
        setIsMessageInvalid(true);
        return;
      }

      const response = await api.post('create-message', message);

      setMessages((prevState) => [...prevState, response.data.newMessage]);
    } catch {
      setIsMessageInvalid(true);
    } finally {
      setCreateMessageButtonText('Deixar recado');
    }
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
            <ProfileSummary recados={messages.length} />
          </Card>

          <Card>
            <h2>O que voc?? deseja fazer?</h2>

            <div className="action-buttons-container">
              <button
                type="button"
                className={`action-button ${
                  whatToDo === 'message' ? 'active' : ''
                }`}
                onClick={() => setWhatToDo('message')}
              >
                Deixar um recado
              </button>

              <button
                type="button"
                className={`action-button ${
                  whatToDo === 'community' ? 'active' : ''
                }`}
                onClick={() => setWhatToDo('community')}
              >
                Criar uma comunidade
              </button>
            </div>
          </Card>

          {whatToDo === 'community' && (
            <Card>
              <h2 className="subTitle">Crie a sua comunidade</h2>

              <form onSubmit={handleAddNewCommunity}>
                <div>
                  <input
                    type="text"
                    placeholder="Qual vai ser o nome da sua comunidade?"
                    name="title"
                    aria-label="Qual vai ser o nome da sua comunidade?"
                    maxLength={20}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Coloque uma URL para usarmos de capa"
                    name="image"
                    aria-label="Coloque uma URL para usarmos de capa"
                    maxLength={200}
                  />
                </div>

                {isCommunityInvalid && (
                  <p className="form-invalid">
                    A valida????o do formul??rio falhou, por favor, preencha com um
                    nome de at?? 20 caracteres e um recado de at?? 200 caracteres.
                  </p>
                )}

                <button type="submit">{createCommunityButtonText}</button>
              </form>
            </Card>
          )}

          {whatToDo === 'message' && (
            <>
              <Card>
                <h2 className="subTitle">Deixe um recado</h2>

                <form onSubmit={handleAddNewMessage}>
                  <div>
                    <input
                      type="text"
                      placeholder="De quem ?? o recado?"
                      name="creatorSlug"
                      aria-label="De quem ?? o recado?"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Qual ?? o seu recado?"
                      name="message"
                      aria-label="Qual ?? o seu recado?"
                      maxLength={200}
                    />
                  </div>

                  {isMessageInvalid && (
                    <p className="form-invalid">
                      A valida????o do formul??rio falhou, por favor, preencha com
                      um nome de at?? 20 caracteres e um recado de at?? 200
                      caracteres.
                    </p>
                  )}

                  <button type="submit">{createMessageButtonText}</button>
                </form>
              </Card>

              <ListMessages
                title={`Recados (${messages.length})`}
                data={messages.map((message) => ({
                  key: String(message.id),
                  creatorSlug: message.creatorSlug,
                  message: message.message,
                }))}
                loading={loading}
                error={error}
              />
            </>
          )}
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
