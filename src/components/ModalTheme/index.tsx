import { ListImages } from 'components/ListImages';
import { ImageShape } from 'components/ListImages/types';
import { useModalTheme } from 'hooks/ModalThemeContext';
import { ChangeEventHandler, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { api } from 'services/api';
import * as S from './styles';
import { FiX } from 'react-icons/fi';

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
    document.body.style.backgroundImage = `url('${image}')`;
    handleCloseModal();
  }

  function handleCloseModal() {
    setIsModalThemeOpen(false);
  }

  function handleChooseImageFromPc(e: ChangeEventHandler<HTMLInputElement>) {
    const getImagePath = URL.createObjectURL(e.target.files[0]);
    document.body.style.backgroundImage = `url('${getImagePath}')`;
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
