import { useState } from 'react';
import * as S from './styles';
import { ImageShape } from './types';

interface ListImagesProps {
  data: Array<ImageShape>;
  showSeeMore?: boolean;
  onClick?: (image: string) => void;
  onClickToggleSeeMore?: () => void;
}

export function ListImages({
  data,
  showSeeMore = false,
  onClick = () => {},
  onClickToggleSeeMore = () => {},
}: ListImagesProps) {
  const [seeMoreText, setSeeMoreText] = useState('Ver mais');

  return (
    <S.Container>
      <ul>
        {data.map((item) => (
          <li key={item.id} onClick={() => onClick(item.urls.full)}>
            <img src={item.urls.small} alt={item.alt_description} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
