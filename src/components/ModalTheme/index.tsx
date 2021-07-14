import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { ListImages } from 'components/ListImages';
import { ModalContext } from 'contexts/ModalContext';
import { api } from 'services/api';
import * as S from './styles';

interface ModalThemeProps {
  isOpen: boolean;
}

export function ModalTheme({ isOpen }: ModalThemeProps) {
  const { setIsModalOpen } = useContext(ModalContext);

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const photos = await api.get('unsplash');
      setImages(photos.data.photos as any);
    })();
  }, []);

  function handleSetTheme(image: string) {
    document.body.style.backgroundImage = `url('${image}')`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    handleCloseModal();
  }

  function handleCloseModal() {
    setIsModalOpen(false);
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
