import { useState } from 'react';
import * as S from './styles';

interface ListImagesProps {
  data: Array<string>;
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
          <li key={item} onClick={() => onClick(item)}>
            <img src={item} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
