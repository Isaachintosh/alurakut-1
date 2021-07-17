import { ListImages } from 'components/ListImages';
import { ImageShape } from 'components/ListImages/types';
import { useModalTheme } from 'hooks/ModalThemeContext';
import { ChangeEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { api } from 'services/api';
import * as S from './styles';
import { FiX } from 'react-icons/fi';
import nookies from 'nookies';

interface ModalThemeProps {
  isOpen: boolean;
}

export function ModalTheme({ isOpen }: ModalThemeProps) {
  const { setIsModalThemeOpen } = useModalTheme();

  const [images, setImages] = useState<ImageShape[]>([]);

  useEffect(() => {
    (async () => {
      const photos = await api.get('photos');
      setImages(photos.data.photos);
    })();
  }, []);

  function handleSetTheme(image: string) {
    const url = `url('${image}')`;

    document.body.style.backgroundImage = url;

    const user = nookies.get(null).GITHUB_USER;
    if (user) {
      nookies.set(null, `${user}_THEME`, url, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });
    }

    handleCloseModal();
  }

  function handleCloseModal() {
    setIsModalThemeOpen(false);
  }

  function handleChooseImageFromPc(e: ChangeEvent<HTMLInputElement>) {
    const getImagePath = URL.createObjectURL(e.target.files[0]);

    const url = `url('${getImagePath}')`;

    document.body.style.backgroundImage = url;

    const user = nookies.get(null).GITHUB_USER;
    if (user) {
      nookies.set(null, `${user}_THEME`, url, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });
    }

    handleCloseModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Example Modal"
      style={{
        content: {
          width: '50%',
          maxHeight: '600px',
          margin: '0 auto',
        },
      }}
    >
      <S.Container>
        <button
          type="button"
          className="button-close"
          onClick={handleCloseModal}
        >
          <FiX size={25} />
        </button>

        <ListImages
          data={images.map((image) => image)}
          onClick={handleSetTheme}
        />

        <div className="file-input-container">
          <label htmlFor="file">
            Ou escolha uma imagem do seu pc
            <input
              id="file"
              type="file"
              accept="image/*"
              onChange={handleChooseImageFromPc}
              hidden
            />
          </label>
        </div>
      </S.Container>
    </Modal>
  );
}
