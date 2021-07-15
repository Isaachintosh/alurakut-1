import { ListImages } from 'components/ListImages';
import { ImageShape } from 'components/ListImages/types';
import { useModalTheme } from 'hooks/ModalThemeContext';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { api } from 'services/api';
import * as S from './styles';

interface ModalThemeProps {
  isOpen: boolean;
}

export function ModalTheme({ isOpen }: ModalThemeProps) {
  const { setIsModalThemeOpen } = useModalTheme();

  const [images, setImages] = useState<ImageShape[]>([]);

  useEffect(() => {
    (async () => {
      const photos = await api.get('unsplash');
      setImages(photos.data.photos);
    })();
  }, []);

  function handleSetTheme(image: string) {
    document.body.style.backgroundImage = `url('${image}')`;
    handleCloseModal();
  }

  function handleCloseModal() {
    setIsModalThemeOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Example Modal"
      style={{
        content: {
          width: '50%',
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
          Fechar
        </button>

        <ListImages
          data={images.map((image) => image)}
          onClick={handleSetTheme}
        />
      </S.Container>
    </Modal>
  );
}
