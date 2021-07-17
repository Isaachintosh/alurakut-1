import { useState } from 'react';
import { SignInButton } from 'components/SignInButton';
import { useRef } from 'react';
import { githubApi } from 'services/githubApi';
import { debounce } from 'utils/debounce';
import * as S from './styles';

export function Login() {
  const [githubUser, setGithubUser] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputChange() {
    debounce(async () => {
      const username = inputRef.current.value;

      try {
        await githubApi.get(`users/${username}`);
        setGithubUser(username);
      } catch (err) {
        setGithubUser('');
      }
    }, 500);
  }

  return (
    <S.Container
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="loginScreen">
        <section className="logoArea">
          <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.svg`} />

          <p>
            <strong>Conecte-se</strong> aos seus amigos e familiares usando
            recados e mensagens instantâneas
          </p>
          <p>
            <strong>Conheça</strong> novas pessoas através de amigos de seus
            amigos e comunidades
          </p>
          <p>
            <strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só
            lugar
          </p>
        </section>

        <section className="formArea">
          <div className="box">
            <p style={{ marginBottom: 10 }}>
              Acesse agora mesmo com a sua conta do <strong>GitHub</strong>!
            </p>

            <input
              name="githubUser"
              placeholder="Informe o seu usuário do GitHub"
              ref={inputRef}
              onChange={handleInputChange}
            />

            <SignInButton githubUser={githubUser} />
          </div>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/login">
                <strong>ENTRAR JÁ</strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> -{' '}
            <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> -{' '}
            <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </S.Container>
  );
}
