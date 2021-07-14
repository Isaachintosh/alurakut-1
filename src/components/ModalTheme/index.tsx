import { useContext, useEffect, useState } from 'react';
import { unsplashApi } from 'services/unsplashApi';
import Modal from 'react-modal';
import { ListImages } from 'components/ListImages';
import { ModalContext } from 'contexts/ModalContext';

interface ModalThemeProps {
  isOpen: boolean;
}

export function ModalTheme({ isOpen }: ModalThemeProps) {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    unsplashApi.get('photos').then((response) => {
      setImages(response.data.map((item) => item.urls.small));
    });
  }, []);

  function handleSetTheme(image: string) {
    document.body.style.backgroundImage = `url('${image}')`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
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
        <button type="button" onClick={handleCloseModal}>
          Fechar
        </button>
        <ListImages
          data={images.map((image) => image)}
          onClick={handleSetTheme}
        />
      </Modal>
    </div>
  );
}
